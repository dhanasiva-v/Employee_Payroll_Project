import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {

  leaves : Leave[];

  constructor(private leaveService: LeaveService,private router:Router) { }

  ngOnInit(): void {

    this.getLeaves();
  }
   private getLeaves(){
     this.leaveService.getLeavesList().subscribe(data => {
       this.leaves = data;
     });
   }
     deleteLeave(empId: number){
      this.leaveService.deleteLeave(empId).subscribe( data => {
        console.log(data);
        this.getLeaves();
      })
    }  
    Logout()
    {
      sessionStorage.clear();
      this.router.navigate(['login'])
    }  

    
   }

