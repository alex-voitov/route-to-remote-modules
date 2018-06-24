import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestRemote1Component } from './test-remote1.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [TestRemote1Component],
  exports: [TestRemote1Component]
})
export class TestRemote1Module { }
