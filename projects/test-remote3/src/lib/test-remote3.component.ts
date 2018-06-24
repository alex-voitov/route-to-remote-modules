import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-remote3',
  template: `
    content lib-test-remote3
    <hr/>
    <a [routerLink]="['/local']">
      load local
    </a>
    <hr/>
    <a [routerLink]="['/test-remote1']">
      load remote 1
    </a>
    <hr/>
    <a [routerLink]="['/test-remote2']">
      load remote 2
    </a>
    <hr/>
    <a [routerLink]="['/test-remote3']">
      load remote 3
    </a>
    <hr/>
  `,
  styles: []
})
export class TestRemote3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
