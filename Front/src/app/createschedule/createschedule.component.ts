import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemployeeService } from '../demployee.service';
import { Schedule } from '../schedule';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-createschedule',
  templateUrl: './createschedule.component.html',
  styleUrls: ['./createschedule.component.css']
})
export class CreatescheduleComponent implements OnInit {

  Schedule: Schedule=new Schedule();
  constructor(private ScheduleService: ScheduleService,
    private dService: DemployeeService,
    private router: Router) { }
empid=this.dService.empIds;
  ngOnInit(): void {
  }

  saveEmployee(){
    this.ScheduleService.createSchedule(this.Schedule).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/schedulelist'],);
  }
  

onSubmit(){
  console.log(this.Schedule);
  this.saveEmployee();


}
}