import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemployeeService } from '../demployee.service';
import { Timesheet } from '../timesheet';
import { TimesheetService } from '../timesheet.service';

@Component({
  selector: 'app-employeetimesheet',
  templateUrl: './employeetimesheet.component.html',
  styleUrls: ['./employeetimesheet.component.css']
})
export class EmployeetimesheetComponent implements OnInit {

  empId: any;
  timesheet : Timesheet;

  constructor(private TimesheetService: TimesheetService,
    private router:Router,
    private dservice:DemployeeService) { }

  ngOnInit(): void {
    this.empId = this.dservice.empIds;
    this.getAttendance(this.empId);
  }
   
   private getAttendance(empId: number){
    empId = this.dservice.empIds;
    console.log("from ets",empId)
     this.TimesheetService.getTimesheetById(empId).subscribe(data => 
      {
       this.timesheet = data;
     });}
     
     Back()
     {
        this.router.navigate(['/emploginsuccess'],this.empId);  
   }
  }