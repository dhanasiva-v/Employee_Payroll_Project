import { TestBed } from '@angular/core/testing';

import { EmpRegistraionService } from './emp-registraion.service';

describe('EmpRegistraionService', () => {
  let service: EmpRegistraionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpRegistraionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
