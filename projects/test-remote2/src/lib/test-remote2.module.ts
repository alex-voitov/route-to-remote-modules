import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestRemote2Component } from './test-remote2.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [TestRemote2Component],
  exports: [TestRemote2Component]
})
export class TestRemote2Module { }
