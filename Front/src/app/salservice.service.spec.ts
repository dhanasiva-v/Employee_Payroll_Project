import { TestBed } from '@angular/core/testing';

import { SalserviceService } from './salservice.service';

describe('SalserviceService', () => {
  let service: SalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
