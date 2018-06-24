import { PluginLoaderConfig } from './app-plugin.types';

import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularRouter from '@angular/router';

const PluginDependencyMap = {
  '@angular/core': AngularCore,
  '@angular/common': AngularCommon,
  '@angular/router': AngularRouter,
};

export class AppPluginDependencies {

  static resolve(deps: string[]) {
    let ret: any = {};

    if(deps) {
      deps.forEach((d)=>{
        let dep = PluginDependencyMap[d];
        if(dep) {
          ret[d] = dep;
        } else {
          throw 'Unknown dependency: '+d;
        }
      });
    }

    return ret;
  }

}