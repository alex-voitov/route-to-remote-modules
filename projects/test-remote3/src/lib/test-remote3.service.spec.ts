import { TestBed, inject } from '@angular/core/testing';

import { TestRemote3Service } from './test-remote3.service';

describe('TestRemote3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestRemote3Service]
    });
  });

  it('should be created', inject([TestRemote3Service], (service: TestRemote3Service) => {
    expect(service).toBeTruthy();
  }));
});
