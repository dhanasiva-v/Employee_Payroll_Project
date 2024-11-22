import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Timesheet } from '../timesheet';
import { TimesheetService } from '../timesheet.service';

@Component({
  selector: 'app-timesheet-list',
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.css']
})
export class TimesheetListComponent implements OnInit {

  timesheets:Timesheet[];

  constructor(private timesheetService: TimesheetService,
    private router: Router) { }

  ngOnInit(): void {
   this.getTimesheets();
  }

  private getTimesheets(){
    this.timesheetService.getTimesheetsList().subscribe(data =>{
      this.timesheets =data;
    });
  }


  updateTimesheet(empId: number){
    this.router.navigate(['/updatetimesheet', empId])};
  

  deleteTimesheet(empId: number){
    this.timesheetService.deleteTimesheet(empId).subscribe(data =>{
      console.log(data);
      this.getTimesheets();
    })
  }

  Logout()
  {
    sessionStorage.clear();
    this.router.navigate(['login'])

  }

}
