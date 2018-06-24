import { Component, AfterViewInit, ComponentFactory, ViewContainerRef } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { AppPluginService } from './app-plugin.service';

@Component({
  selector: 'app-plugin',
  template: `
  `,
})
export class AppPluginComponent implements AfterViewInit {
  constructor(
    private _vcr: ViewContainerRef,
    private appPluginService: AppPluginService,
    private activatedRoute: ActivatedRoute,
  ) {
    console.log('AppPluginComponent#constructor called router='+JSON.stringify(this.activatedRoute.snapshot.url));
  }

  ngAfterViewInit() {
    this.appPluginService.getModuleRoot(this.activatedRoute.snapshot.url[0].path).subscribe(
      (factory: ComponentFactory<any>) => {
        this._vcr.clear();
        const componentRef = this._vcr.createComponent(factory);
      }
    );
  }
}
