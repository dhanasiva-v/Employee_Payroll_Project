import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedule } from '../schedule';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-updateschedule',
  templateUrl: './updateschedule.component.html',
  styleUrls: ['./updateschedule.component.css']
})
export class UpdatescheduleComponent implements OnInit {

  empId: number;
  Schedule: Schedule = new Schedule();
  constructor(private ScheduleService: ScheduleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.empId = this.route.snapshot.params['empId'];


    this.ScheduleService.getScheduleByEmpId(this.empId).subscribe(data => {
      this.Schedule = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.ScheduleService.updateSchedule(this.empId, this.Schedule).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/schedulelist']);
  }
  
}
