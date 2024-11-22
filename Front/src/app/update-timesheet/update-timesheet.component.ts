import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Timesheet } from '../timesheet';
import { TimesheetService } from '../timesheet.service';

@Component({
  selector: 'app-update-timesheet',
  templateUrl: './update-timesheet.component.html',
  styleUrls: ['./update-timesheet.component.css']
})
export class UpdateTimesheetComponent implements OnInit {

  

  empId: number;
  timesheet: Timesheet = new Timesheet();

  constructor(private timesheetSevice:  TimesheetService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.empId=this.route.snapshot.params['empId'];

    this.timesheetSevice.getTimesheetById(this.empId)
    .subscribe(data =>{
      console.log(data)
      this.timesheet =data;
    }, error => console.log(error));
  }

  updateTimesheet() {
    this.timesheetSevice.updateTimesheet(this.empId, this.timesheet)
    .subscribe(data => {
      console.log(data);
      this.timesheet = new Timesheet();
      this.goToTimesheetList();
    }, error => console.log(error));
    
    }

  onSubmit(){
    this.timesheetSevice.updateTimesheet(this.empId, this.timesheet)
    .subscribe(data =>{
      this.goToTimesheetList();
    },
    error => console.log(error));
  }

  goToTimesheetList(){
    this.router.navigate(['/timesheetlist']);
  }

}
