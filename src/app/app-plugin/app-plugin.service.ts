import { Injectable, Injector, Type, Compiler, Provider, ComponentFactory } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Subject, Observable, of } from 'rxjs';
import { AppConfig, PluginLoader } from './app-plugin.types';
import { AppPluginDependencies } from './app-plugins.dep-resolver';

export function AppPluginServiceFactory(configUrl: string, remoteModuleComponent: Type<any>) {
  return (compiler: Compiler, injector: Injector, httpClient: HttpClient) => {
    return new AppPluginService(configUrl, remoteModuleComponent, compiler, injector, httpClient);
  }
}

export function AppPluginInitializer(appPluginService: AppPluginService) {
  return () => appPluginService.initialize();
}

@Injectable()
export class AppPluginService {
  private pluginLoaderMap: Map<string, PluginLoader>;
  private configUrl: string;
  private remoteModuleComponent: Type<any>;
  private compiler: Compiler;
  private injector: Injector;
  private httpClient: HttpClient;

  constructor(configUrl: string,
    remoteModuleComponent: Type<any>,
    compiler: Compiler,
    injector: Injector,
    httpClient: HttpClient,
  ) {
    this.pluginLoaderMap = new Map<string, PluginLoader>();
    this.configUrl = configUrl;
    this.remoteModuleComponent = remoteModuleComponent;

    this.compiler = compiler;
    this.injector = injector;
    this.httpClient = httpClient;
  }

  initialize(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.configUrl).subscribe((config: AppConfig) => {
        if (config) {
          let pluginRoutes: Routes = [];
          if (config.plugins) {
            config.plugins.forEach((plugin) => {
              if (!plugin.name) {
                reject();
                throw 'plugin.name is required: ' + JSON.stringify(plugin);
              }
              if (plugin.loader) {
                let existing = this.pluginLoaderMap.get(plugin.loader.path);
                if (existing) {
                  reject();
                  throw 'plugin.loader.path conflict. already registered: ' + JSON.stringify(existing);
                }
                this.pluginLoaderMap.set(plugin.loader.path, { config: plugin.loader });
                pluginRoutes.push({ path: plugin.loader.path, component: this.remoteModuleComponent, data: plugin.loader });
              }
            });
          }

          if (pluginRoutes.length > 0) {
            let router: Router = this.injector.get(Router);
            router.config.unshift(...pluginRoutes);
          }

          resolve();
        } else {

        }
      },
      (err)=> {
        reject();
      });
    });
  }

  public getModuleRoot(path: string): Observable<ComponentFactory<any>> {
    let ret: Observable<ComponentFactory<any>>;

    let loader: PluginLoader = this.pluginLoaderMap.get(path);
    if (!loader) {
      throw 'unknown path=' + path;
    }

    console.log('getModuleRoot loader=' + JSON.stringify(loader));

    let retSubject: Subject<ComponentFactory<any>> = new Subject<ComponentFactory<any>>();
    ret = retSubject.asObservable();

    fetch(loader.config.url)
      .then(response => response.text())
      .then(source => {
        const exports = {}; // this will hold module exports
        const modules = AppPluginDependencies.resolve(loader.config.deps);

        const require = (module) => modules[module]; // shim 'require'

        eval(source); // interpret the plugin source

        const mwcf = this.compiler.compileModuleAndAllComponentsSync(exports[loader.config.module]);

        const componentFactory = mwcf.componentFactories
          .find(e => e.selector === loader.config.selector); // find the entry component

        if (componentFactory) {
          loader.componentFactory = componentFactory;
          retSubject.next(componentFactory);
        }
      });


    return ret;
  }
}
