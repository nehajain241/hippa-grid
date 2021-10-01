import { TestBed } from '@angular/core/testing';

import { HippService } from './hipp.service';

describe('HippService', () => {
  let service: HippService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HippService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
