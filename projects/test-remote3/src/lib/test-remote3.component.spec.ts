import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRemote3Component } from './test-remote3.component';

describe('TestRemote3Component', () => {
  let component: TestRemote3Component;
  let fixture: ComponentFixture<TestRemote3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRemote3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRemote3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
