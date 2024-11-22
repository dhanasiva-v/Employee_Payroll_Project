import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeetimesheetComponent } from './employeetimesheet.component';

describe('EmployeetimesheetComponent', () => {
  let component: EmployeetimesheetComponent;
  let fixture: ComponentFixture<EmployeetimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeetimesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeetimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
