import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {

  

  attend : Attendance[];

  constructor(private attendanceservice: AttendanceService,
    private router:Router) { }

  ngOnInit(): void {

    this.getAttendance();
  }
   private getAttendance(){
     this.attendanceservice.getAttendanceList().subscribe(data => 
      {
       this.attend = data;
     });
   }
   deleteEmployee(empId: number){
    this.attendanceservice.deleteAttendance(empId).subscribe( data => {
      console.log(data);
      this.getAttendance();
    })
  }  
  
  Logout()
  {
    sessionStorage.clear();
    this.router.navigate(['login'])

  }
}
