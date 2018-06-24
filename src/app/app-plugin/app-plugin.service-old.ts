import { Injectable, Type, Compiler, Provider, ComponentFactory } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Subject, Observable, of  } from 'rxjs';
import { AppConfig, PluginLoader } from './app-plugin.types';
import { AppPluginDependencies } from './app-plugins.dep-resolver';

export function AppPluginServiceFactoryOld(configUrl: string, remoteModuleComponent: Type<any>) {
  return (compiler: Compiler, router:Router, httpClient: HttpClient) => {
    return new AppPluginServiceOld(configUrl, remoteModuleComponent, compiler, router, httpClient);
  }
}

@Injectable()
export class AppPluginServiceOld {
  private pluginLoaderMap: Map<string, PluginLoader>;

  constructor(configUrl: string,
    private remoteModuleComponent: Type<any>,
    private compiler: Compiler, private router:Router, private httpClient: HttpClient) {
      console.log("AppPluginService configUrl="+configUrl+" router.config="+JSON.stringify(router.config));
      this.pluginLoaderMap = new Map<string, PluginLoader>();
      this.init(configUrl);
  }

  private init(configUrl: string): void {
    this.httpClient.get(configUrl).subscribe((config: AppConfig) => {
      if (config) {
        let pluginRoutes: Routes = [];
        if (config.plugins) {
          config.plugins.forEach((plugin) => {
            if (!plugin.name) {
              throw 'plugin.name is required: ' + JSON.stringify(plugin);
            }
            if (plugin.loader) {
              let existing = this.pluginLoaderMap.get(plugin.loader.path);
              if (existing) {
                throw 'plugin.loader.path conflict. already registered: ' + JSON.stringify(existing);
              }
              this.pluginLoaderMap.set(plugin.loader.path, { config: plugin.loader });
              pluginRoutes.push({ path: plugin.loader.path, component: this.remoteModuleComponent, data: plugin.loader });
            }
          });
        }

        if (pluginRoutes.length > 0) {
          // let newRoutes: Routes = [];
          // let rc = this.router.config;
          // for (var i = 0; i < rc.length; i++) {
          //   if (rc[i].path == '**') {
          //     newRoutes.push(...pluginRoutes);
          //   }
          //   newRoutes.push(rc[i]);
          // }

          // this.router.resetConfig(newRoutes);
          this.router.config.unshift(...pluginRoutes);
        }
      }
    });
  }

  public getModuleRoot(path: string): Observable<ComponentFactory<any>> {
    let ret:Observable<ComponentFactory<any>>;

    let loader: PluginLoader = this.pluginLoaderMap.get(path);
    if (!loader) {
      throw 'unknown path=' + path;
    }

    console.log('getModuleRoot loader='+JSON.stringify(loader));

    if(loader.componentFactory) {
      ret = of(loader.componentFactory);
    } else {
      let retSubject: Subject<ComponentFactory<any>> = new Subject<ComponentFactory<any>>(); 
      ret = retSubject.asObservable();

      fetch(loader.config.url)
      .then(response => response.text())
      .then(source => {
        const exports = {}; // this will hold module exports
        const modules = AppPluginDependencies.resolve(loader.config.deps);
        // const modules = {   // this is the list of modules accessible by plugin
        //   '@angular/core': AngularCore,
        //   '@angular/common': AngularCommon
        // };

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
      
    }
    return ret;
  }
  
}

