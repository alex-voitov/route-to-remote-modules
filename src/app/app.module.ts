import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Compiler } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { AppRouterModule } from './app.router.module';

import { AppComponent } from './app.component';
import { AppPluginModule } from './app-plugin/app-plugin.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    AppPluginModule.forRoot('http://localhost:4200/assets/app-config.json'),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {

  }
}
