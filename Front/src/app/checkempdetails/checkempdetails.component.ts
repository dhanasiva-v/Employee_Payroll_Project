import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpRegistraionService } from '../emp-registraion.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-checkempdetails',
  templateUrl: './checkempdetails.component.html',
  styleUrls: ['./checkempdetails.component.css']
})
export class CheckempdetailsComponent implements OnInit {

  
  employee = new Employee();
  msg=''
  empId: number;

  constructor(private _service: EmpRegistraionService, private _router: Router) { }

  ngOnInit(): void {
  }
  forgotPasswordcheck(){
    this._service.resetPasswordCheckEmp(this.employee).subscribe(
      data =>{ console.log("response recieved");
      this.empId = data.empId;
      this._service.setMessage(this.empId)
      console.log(this.empId);
      this._router.navigate(['/empchangepassword/:empId'])
    },
      error => {
        console.log("exception occured");
       this.msg="Bad Credentia, please enter valid registerd emailid and mobile number";
      }
    )

    }
}
