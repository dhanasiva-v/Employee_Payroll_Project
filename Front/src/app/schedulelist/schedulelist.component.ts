import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from '../schedule';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedulelist',
  templateUrl: './schedulelist.component.html',
  styleUrls: ['./schedulelist.component.css']
})
export class SchedulelistComponent implements OnInit {

  Schedule : Schedule[];

  constructor(private ScheduleService: ScheduleService,private router:Router) { }

  ngOnInit(): void {

    this.getSchedule();Schedule
  }
   private getSchedule(){
     this.ScheduleService.getScheduleList().subscribe(data => {
       this.Schedule = data;
     });
   }
   updateSchedule(empId: number){
    this.router.navigate(['updateschedule', empId]);
  }

     deleteSchedule(empId: number){
      this.ScheduleService.deleteSchedule(empId).subscribe( data => {
        console.log(data);
        this.getSchedule();
      })
    }  
    Logout()
    {
      sessionStorage.clear();
      this.router.navigate(['login'])

    }
   }

