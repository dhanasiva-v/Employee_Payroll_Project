import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-createattendance',
  templateUrl: './createattendance.component.html',
  styleUrls: ['./createattendance.component.css']
})
export class CreateattendanceComponent implements OnInit {

  attend: Attendance=new Attendance();
  constructor(private attendanceservice: AttendanceService,
    private router: Router) { }
  
  ngOnInit(): void {
  }

  saveEmployee(){
    this.attendanceservice.createAttendance(this.attend).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/empattendance']);
  }
  

onSubmit(){
  console.log(this.attend);
  this.saveEmployee();
  this.router.navigate(['/employeeleave/:empId',this.attend.empId]);


}
}
