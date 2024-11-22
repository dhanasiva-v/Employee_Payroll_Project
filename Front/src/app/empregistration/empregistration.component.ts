import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';
import { EmpRegistraionService } from '../emp-registraion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empregistration',
  templateUrl: './empregistration.component.html',
  styleUrls: ['./empregistration.component.css']
})
export class EmpregistrationComponent implements OnInit {
  employee = new Employee();
  msg='';

  constructor( private _service: EmpRegistraionService, private _router: Router) { }

  ngOnInit() {

  }

  registerEmployee(){
    this._service.registerUserFromRemote(this.employee).subscribe(
    data =>
    {
       console.log("response recieved");
       this.msg="Registratered Succsessfully"
       alert('Registration Success!!👍');
    this._router.navigate(['/emplogin'])
  },
    error => {
      console.log("exception occured");
     this.msg=error.error;
     alert('EmailId is already registered!! 👎');

    }
  )

}
}