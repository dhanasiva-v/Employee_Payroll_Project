import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmpRegistraionService } from '../emp-registraion.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {
   employee = new Employee();
   msg = '';
  public empId: any;
  constructor(private _service : EmpRegistraionService, private _router : Router,private route: ActivatedRoute) { }
  ngOnInit(): void {
  }
  loginEmp(form:NgForm){
    console.log(form.value.email,form.value.pwd)
  sessionStorage.setItem("email",form.value.email);
  sessionStorage.setItem("pwd",form.value.pwd);
  sessionStorage.setItem("empId",form.value.emp);


    this._service.loginEmpRemote(this.employee).subscribe(
      data =>{ console.log("response received")
      this.empId = data.empId;
      sessionStorage.setItem("empId",data.empId);
      this._service.setMessage(this.empId)
      console.log(this.empId);
      
      this._router.navigate(['/emploginsuccess'])
    },
      error => {
        console.log("exception occured");
       this.msg="Bad Credentials, please enter valid emailid and password";
       alert(this.msg);
      }
    )

  }
  gotoregisteration(){
    this._router.navigate(['/registeration'])
  }

}
