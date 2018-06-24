import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRemote2Component } from './test-remote2.component';

describe('TestRemote2Component', () => {
  let component: TestRemote2Component;
  let fixture: ComponentFixture<TestRemote2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRemote2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRemote2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
