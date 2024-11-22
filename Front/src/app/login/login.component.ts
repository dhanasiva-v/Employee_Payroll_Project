import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new User();
msg='';

  constructor(private service : RegistrationService, private _router : Router) { }

  
  ngOnInit(): void {
  }

onSubmit(form:NgForm)
{
  console.log(form.value.email,form.value.password)
  sessionStorage.setItem("email",form.value.email);
  sessionStorage.setItem("password",form.value.password);
  //this._router.navigate(['/loginguard'])

  this.service.loginUserFromRemote(this.user).subscribe(
    data =>{
      console.log("response recieved");
      this._router.navigate(['/loginsuccess'])
  },
  error => {
  console.log("exception occured");
  this.msg="Bad credentials, please enter valid emailId and password";
    alert(this.msg);
  })
}

gotoregistration(){
  this._router.navigate(['/registration'])
}
}
