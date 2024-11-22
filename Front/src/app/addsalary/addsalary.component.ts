import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salary } from '../salary';
import { SalserviceService } from '../salservice.service';

@Component({
  selector: 'app-addsalary',
  templateUrl: './addsalary.component.html',
  styleUrls: ['./addsalary.component.css']
})
export class AddsalaryComponent implements OnInit {

  salary = new Salary();

  constructor(private _route: Router,private _service:SalserviceService) { }

  ngOnInit(): void {
  }

  addSalaryformsubmit(){
    this._service.addSalaryListFromRemote(this.salary).subscribe(
      data=>{
        console.log("Salary is added succsessfully");
        this._route.navigate(['/salarylist']);
      },
      error=>console.log("error")

    )

  }
  gotolist(){
    this._route.navigate(['/salarylist']);
  }



}
