import { TestBed, inject } from '@angular/core/testing';

import { TestRemote1Service } from './test-remote1.service';

describe('TestRemote1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestRemote1Service]
    });
  });

  it('should be created', inject([TestRemote1Service], (service: TestRemote1Service) => {
    expect(service).toBeTruthy();
  }));
});
