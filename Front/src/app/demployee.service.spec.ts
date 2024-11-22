import { TestBed } from '@angular/core/testing';

import { DemployeeService } from './demployee.service';

describe('DemployeeService', () => {
  let service: DemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
