import { NgModule, SystemJsNgModuleLoader, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Route, Router, RouterModule } from '@angular/router';

export const __REDIRECT_APP_ROUTE: Route = { path: '**', redirectTo: '/local' };
const routes: Routes = [
	{ path: 'local', loadChildren: './local-module/local.module#LocalModule' },
	{ path: '**', redirectTo: '/local' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRouterModule { 
    constructor() {
    }
}
