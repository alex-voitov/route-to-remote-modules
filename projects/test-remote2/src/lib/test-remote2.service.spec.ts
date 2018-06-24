import { TestBed, inject } from '@angular/core/testing';

import { TestRemote2Service } from './test-remote2.service';

describe('TestRemote2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestRemote2Service]
    });
  });

  it('should be created', inject([TestRemote2Service], (service: TestRemote2Service) => {
    expect(service).toBeTruthy();
  }));
});
