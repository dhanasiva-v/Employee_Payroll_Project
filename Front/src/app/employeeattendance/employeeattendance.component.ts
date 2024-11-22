import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';
import { DemployeeService } from '../demployee.service';

@Component({
  selector: 'app-employeeattendance',
  templateUrl: './employeeattendance.component.html',
  styleUrls: ['./employeeattendance.component.css']
})
export class EmployeeattendanceComponent implements OnInit {
  empId: any;
  attend : Attendance;

  constructor(private attendanceservice: AttendanceService,
    private router:Router,
    private dservice:DemployeeService) { }

  ngOnInit(): void {
    this.empId = this.dservice.empIds;
    this.getAttendance(this.empId);
  }
   private getAttendance(empId: number){
    empId = this.dservice.empIds;
    console.log("from eatt",empId)
     this.attendanceservice.getAttendanceByEmpId(empId).subscribe(data => 
      {
       this.attend = data;
     });}
     Back()
     {
        this.router.navigate(['/emploginsuccess'],this.empId);
     
   }

  }