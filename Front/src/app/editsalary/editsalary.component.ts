import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Salary } from '../salary';
import { SalserviceService } from '../salservice.service';

@Component({
  selector: 'app-editsalary',
  templateUrl: './editsalary.component.html',
  styleUrls: ['./editsalary.component.css']
})
export class EditsalaryComponent implements OnInit {

  salary = new Salary();

  constructor(private _route: Router,private _service:SalserviceService,private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    let salId = parseInt(this._activatedRoute.snapshot.paramMap.get('salId'));
     this._service.fetchSalaryByIdFromRemote(salId).subscribe(
      data=> {
        console.log("Data fetched successfully");
       this.salary = data;

      },
      error => console.log("Exception on fetching Salary by id to edit")
    )

  }

  updateformSalaryToRemote(){
    this._service.updateSalaryToRemote(this.salary).subscribe(
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
