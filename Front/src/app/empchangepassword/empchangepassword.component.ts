import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { EmpRegistraionService } from '../emp-registraion.service';

@Component({
  selector: 'app-empchangepassword',
  templateUrl: './empchangepassword.component.html',
  styleUrls: ['./empchangepassword.component.css']
})
export class EmpchangepasswordComponent implements OnInit {

  empId: number;
  employee: Admin = new Admin();
  constructor(private employeeservice: AdminService,
    private route: ActivatedRoute,
    public emps: EmpRegistraionService,
    private router: Router) { }
    msg='';

  ngOnInit(): void {
    this.empId = this.emps.getMessage();
    console.log("from changepass",this.empId)
    this.employeeservice.getEmployeeById(this.empId).subscribe(data => {
      this.employee = data;}, error => console.log(error));
  }  
  goToEmployeeList()
{
  this.router.navigate(['/emplogin'])
}
onSubmit(){
  //this.ngOnInit();
  alert('Password changed sucessfully')
this.employeeservice.updateEmployee(this.empId, this.employee).subscribe( data =>{
this.goToEmployeeList();
}
, error => {
  console.log("exception occured");
 this.msg=error.error;
 alert('EmailId is already exists !!👎')});
}}