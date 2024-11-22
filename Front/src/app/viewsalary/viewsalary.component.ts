import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Salary } from '../salary';
import { SalserviceService } from '../salservice.service';

@Component({
  selector: 'app-viewsalary',
  templateUrl: './viewsalary.component.html',
  styleUrls: ['./viewsalary.component.css']
})
export class ViewsalaryComponent implements OnInit {

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
    
    gotolist(){
      this._route.navigate(['/salarylist']);
    }

  }
