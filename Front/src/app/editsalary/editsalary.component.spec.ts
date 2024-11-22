import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsalaryComponent } from './editsalary.component';

describe('EditsalaryComponent', () => {
  let component: EditsalaryComponent;
  let fixture: ComponentFixture<EditsalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
