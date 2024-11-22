import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();
  msg='';

  constructor(private _service: RegistrationService,private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response recieved");
        this.msg="Admin Registration Successfully done"
        alert('SUCCESS!!')
        this.router.navigate(['/login'])
      } ,
    error => {
    console.log("exception occured")
    this.msg=error.error;
    
    alert('EmailId already Registered!!ðŸ‘Ž');
    }
    );
  }
}
