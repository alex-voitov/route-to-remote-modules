import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRemote1Component } from './test-remote1.component';

describe('TestRemote1Component', () => {
  let component: TestRemote1Component;
  let fixture: ComponentFixture<TestRemote1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRemote1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRemote1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
