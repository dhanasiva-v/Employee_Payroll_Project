import { Component, OnInit } from '@angular/core';
import { EmployeedashboardComponent } from '../employeedashboard/employeedashboard.component';
import { Salary } from '../salary';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {
  empId: any;
  salary: any;
  constructor() { }

  ngOnInit(): void 
  {
  }

}
