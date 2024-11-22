import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from "../admin.service";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Admin = new Admin();
  constructor(private employeeservice: AdminService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveEmployee(){
    this.employeeservice.createEmployee(this.employee).subscribe( data =>{
      //console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/Admins'])
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
