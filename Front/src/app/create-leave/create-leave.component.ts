import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-create-leave',
  templateUrl: './create-leave.component.html',
  styleUrls: ['./create-leave.component.css']
})
export class CreateLeaveComponent implements OnInit {

  leave: Leave=new Leave();
  constructor(private leaveService: LeaveService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveLeave(){
    this.leaveService.createLeave(this.leave).subscribe( data =>{
      console.log(data);
      this.goToLeaveList();
    },
    error => console.log(error));
  }

  goToLeaveList(){
    this.router.navigate(['/leavelist']);
  }
  

onSubmit(){
  console.log(this.leave);
  this.saveLeave();


}
}
