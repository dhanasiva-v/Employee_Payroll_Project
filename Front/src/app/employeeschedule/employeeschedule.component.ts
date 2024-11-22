import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attendance } from '../attendance';
import { DemployeeService } from '../demployee.service';
import { Schedule } from '../schedule';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-employeeschedule',
  templateUrl: './employeeschedule.component.html',
  styleUrls: ['./employeeschedule.component.css']
})
export class EmployeescheduleComponent implements OnInit {

  empId: any;
  Schedule : Schedule;

  constructor(private ScheduleService: ScheduleService,
    private router:Router,
    private dservice:DemployeeService) { }

  ngOnInit(): void {
    this.empId = this.dservice.empIds;
    this.getAttendance(this.empId);
  }
   private getAttendance(empId: number){
    empId = this.dservice.empIds;
    console.log("from eatt",empId)
     this.ScheduleService.getScheduleByEmpId(empId).subscribe(data => 
      {
       this.Schedule = data;
     });}
     Back()
     {
        this.router.navigate(['/emploginsuccess'],this.empId);
     
   }
   
  }