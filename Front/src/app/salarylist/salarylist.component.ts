import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { Salary } from '../salary';
import { SalserviceService } from '../salservice.service';

@Component({
  selector: 'app-salarylist',
  templateUrl: './salarylist.component.html',
  styleUrls: ['./salarylist.component.css']
})
export class SalarylistComponent implements OnInit {

  salary: Array<Salary> = [];
employee : Employee;
  constructor(private _route: Router,private _service:SalserviceService) { }

  ngOnInit(): void  {
            this.getSalary();
  }
  getSalary() {
    this._service.fetchSalaryListFromRemote().subscribe(
      data => this.salary = data, error => console.log("Exception occurred 1"),
    )
  }
  isEmpty()
  {
    if (this.salary == null)
    {
      return true;
    }
    else { return false; }
  }

  goToAddSalary(){
    this._route.navigate(['/addsalary']);
  }

      goToEditSalary(salId: number) {
    console.log("salId: "+ salId);
    this._route.navigate(['/editsalary', salId]);
  }
  goToViewSalary(salId: number) {
    console.log("salId: "+ salId);
    this._route.navigate(['/viewsalary', salId]);
  }

deleteSalary(salId: number) {
  console.log("salId: "+ salId);
  this._service.deleteSalaryBdyIdFromRemote(salId).subscribe( success =>{
   alert("Salary deleted succesfully");
  },
  error=> {console.log("Exception occured 2"); this.getSalary()}
 )
}
Logout()
{
  sessionStorage.clear();
  this._route.navigate(['login'])


}


}
