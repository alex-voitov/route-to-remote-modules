import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LocalModuleComponent } from './local-module.component';

const routes: Routes = [
	{ path: '', component: LocalModuleComponent }
];

@NgModule({
	declarations: [
		LocalModuleComponent,
	],
	imports: [
		CommonModule,
    RouterModule.forChild(routes),
	],
	providers: [
	],
	exports: [
	]
})
export class LocalModule {
	constructor() {
	}
}
