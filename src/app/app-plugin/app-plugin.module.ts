import { NgModule, Injectable, Injector, ModuleWithProviders, Compiler, APP_INITIALIZER } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppPluginService, AppPluginServiceFactory, AppPluginInitializer } from './app-plugin.service';
import { AppPluginComponent } from './app-plugin.component';

@Injectable()
export class AppTestPluginService {
}

@NgModule({
  declarations: [
    AppPluginComponent,
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    AppPluginComponent,
  ],
  providers: [
  ],
  entryComponents: [AppPluginComponent],
})
export class AppPluginModule {

  constructor(private appPluginService: AppPluginService) {
  }

  static forRoot(configUrl: string): ModuleWithProviders {
    return {
      ngModule: AppPluginModule,
      providers: [
        AppTestPluginService,
        { provide: AppPluginService, useFactory: AppPluginServiceFactory(configUrl, AppPluginComponent), deps: [Compiler, Injector, HttpClient] },
        { provide: APP_INITIALIZER, useFactory: AppPluginInitializer, deps: [AppPluginService], multi: true },
      ],
    };
  }

}
