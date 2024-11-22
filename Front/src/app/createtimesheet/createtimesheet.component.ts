import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Timesheet } from '../timesheet';
import { TimesheetService } from '../timesheet.service';

@Component({
  selector: 'app-createtimesheet',
  templateUrl: './createtimesheet.component.html',
  styleUrls: ['./createtimesheet.component.css']
})
export class CreatetimesheetComponent implements OnInit {

  

  timesheet: Timesheet = new Timesheet();
  constructor(private timesheetService: TimesheetService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveTimesheet(){
    this.timesheetService.createTimesheet(this.timesheet).subscribe(data =>{
      console.log(data);
      this.goToTimesheetList();
    },
    error => console.log(error));
  }

  goToTimesheetList(){
    this.router.navigate(['/timesheetlist']);
  }
  onSubmit(){
    console.log(this.timesheet);
    this.saveTimesheet();

  }

}
