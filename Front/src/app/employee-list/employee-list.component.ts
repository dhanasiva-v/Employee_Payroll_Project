import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  title: "Employee Payroll Management";
  Admins : Admin[];
  public empId: number;
  constructor(public adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router) { }
   
  ngOnInit(): void {

    this.getEmployees();
  }
  deleteEmployee(empId: number)
  {
    this.adminService.deleteEmployee(empId).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }
  private getEmployees(){

    this.adminService.getEmployeesList().subscribe(data =>
      {
        this.Admins = data
      });
  }

  updateEmployee(empId: number)
  {
    this.empId = this.route.snapshot.params['empId'];

    //this.empId1=empId;
    console.log("from elist empId",this.empId)
    this.router.navigate(['updateemployee', empId])}  

Logout()
{
  sessionStorage.clear();
  this.router.navigate(['login'])}  

}

