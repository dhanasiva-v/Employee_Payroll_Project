import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregistrationComponent } from './empregistration.component';

describe('EmpregistrationComponent', () => {
  let component: EmpregistrationComponent;
  let fixture: ComponentFixture<EmpregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
