import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmpRegistraionService {
  private baseURL = "http://localhost:8085/login";
  empId: any;

  constructor(private _http: HttpClient,private route: ActivatedRoute) { }
  setMessage(data: number)
{
  this.empId=data;
}
getMessage()
{
  return this.empId;
}

  public loginEmpRemote(employee:Employee):Observable<any>{
    this.empId = this.empId;
    console.log("emplogin success");

   return this._http.post<any>("http://localhost:8085/employees/login",employee)
  }
  public registerUserFromRemote(employee : Employee):Observable<any>{
    return this._http.post<any>("http://localhost:8085/employees",employee);
  }

  public resetPasswordCheckEmp(employee : Employee):Observable<any>{
    return this._http.put<any>("http://localhost:8085/forgotpassword",employee);
  }

}

