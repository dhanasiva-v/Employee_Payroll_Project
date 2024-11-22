import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckempdetailsComponent } from './checkempdetails.component';

describe('CheckempdetailsComponent', () => {
  let component: CheckempdetailsComponent;
  let fixture: ComponentFixture<CheckempdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckempdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckempdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
