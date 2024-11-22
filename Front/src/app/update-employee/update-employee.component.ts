import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { EmpRegistraionService } from '../emp-registraion.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  empId:number;
  employee: Admin = new Admin();
  constructor(private employeeservice: AdminService,
    private route: ActivatedRoute,
    
    private router: Router) { }
    
    msg='';
    
  ngOnInit(): void {
    this.empId = this.route.snapshot.params['empId'];

   // this.empId=this.employeeservice.getMessage(),
    this.employeeservice.getEmployeeById(this.empId).subscribe(data => {
      this.employee = data;
      console.log("from update emp",data.empId);
    }, error => console.log(error));
  }  
  goToEmployeeList()
{
  this.router.navigate(['/Admins'])
}
onSubmit(){
  //this.ngOnInit();
  
this.employeeservice.updateEmployee(this.empId, this.employee).subscribe( data =>{
  
this.goToEmployeeList();


}
, error => {
  console.log("exception occured");
 this.msg=error.error;
 alert('EmailId is already exists !!👎')});
}}