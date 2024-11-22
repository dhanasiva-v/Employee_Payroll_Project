import { Component, Input, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { toUnicode } from 'punycode';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { DemployeeService } from '../demployee.service';
import { EmpRegistraionService } from '../emp-registraion.service';
import { EmploginComponent } from '../emplogin/emplogin.component';
import { Employee } from '../employee';
import { SalserviceService } from '../salservice.service';
import { Schedule } from '../schedule';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {
  title: "Employee Payroll Management";
  title2: "Salary Details";

  empId: any;
  employees: any;
  salary:any;
  public saleid:any;
  constructor(private  empservice: DemployeeService, 
    private salservice:SalserviceService,
    private route: ActivatedRoute,
    private router: Router) { }
    private comp: EmploginComponent;
 onSubmit(value: any)
 {
  
console.log("ed sessi",sessionStorage.getItem(this.empId))
}
    ngOnInit(): any {
      
      this.getEmp(this.empId);
    }
    

    
    private getEmp(empId){
    this.empservice.getEmployeeByEmailId(this.empId).subscribe((data) =>
      {
        this.employees = data
        console.log(this.comp.empId); },
      
       error => console.log(error));

      }
getsal(empId: number)
{
  this.saleid =this.employees.empId;
  console.log("saleid",this.saleid);

  this.salservice.fetchSalaryByempId(empId).subscribe((data) => 
  {
    console.log(data);
    
    this.salary=data;
  })
 
}
  
  attendance(empId: number)
  {
    this.saleid =this.employees.empId;
    this.router.navigate(['employeeattendance', empId]);
  }

  timesheet(empId:any)
  {
    this.saleid =this.employees.empId;
    this.router.navigate(['employeetimesheet', empId]);
  }

  updateEmployee(empId: number)
  {
    this.router.navigate(['employeeupdate', empId]);
  }

Schedule(empId: number)
{
  this.saleid =this.employees.empId;
  this.router.navigate(['employeeschedule', empId]);
}
Leave(empId: number)
{
  this.saleid =this.employees.empId;
  this.router.navigate(['employeeleave', empId]);
}
printPage() {
  window.print();
}
Logout()
{
  sessionStorage.clear();
  this.router.navigate(['dashboard'])}  

}

