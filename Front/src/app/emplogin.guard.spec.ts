import { TestBed } from '@angular/core/testing';

import { EmploginGuard } from './emplogin.guard';

describe('EmploginGuard', () => {
  let guard: EmploginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmploginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
