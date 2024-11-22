import { TestBed } from '@angular/core/testing';

import { EmployeeRouteGuard } from './employee-route.guard';

describe('EmployeeRouteGuard', () => {
  let guard: EmployeeRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
