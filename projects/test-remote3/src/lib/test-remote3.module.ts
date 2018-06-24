import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestRemote3Component } from './test-remote3.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [TestRemote3Component],
  exports: [TestRemote3Component]
})
export class TestRemote3Module { }
