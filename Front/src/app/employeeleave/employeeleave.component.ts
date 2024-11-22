import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemployeeService } from '../demployee.service';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-employeeleave',
  templateUrl: './employeeleave.component.html',
  styleUrls: ['./employeeleave.component.css']
})
export class EmployeeleaveComponent implements OnInit {
  empId: any;
  leave : Leave;

  constructor(private LeaveService: LeaveService,
    private router:Router,
    private dservice:DemployeeService) { }

  ngOnInit(): void {
    this.empId = sessionStorage.getItem("empId");
    this.getAttendance(this.empId);
  }
   private getAttendance(empId: any){
    empId = sessionStorage.getItem("empId");
    console.log("from eatt",this.empId)
     this.LeaveService.getLeaveByEmpId(this.empId).subscribe(data => 
      {
       this.leave = data;
     });}
     Back()
     {
        this.router.navigate(['/emploginsuccess'],this.empId);
     
   }
  }