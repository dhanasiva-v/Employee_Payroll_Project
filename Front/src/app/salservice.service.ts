import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DemployeeService } from './demployee.service';
import { Salary } from './salary';

@Injectable({
  providedIn: 'root'
})
export class SalserviceService {

  constructor(private _http: HttpClient,public dservice:DemployeeService,private route:ActivatedRoute) { }
  empId1 = this.dservice.empIds;
  
  fetchSalaryListFromRemote():Observable<any>{
   return this._http.get<any>("http://localhost:8085/employeepayroll/salary/salaries");
  }
  addSalaryListFromRemote(salary :Salary):Observable<any>{
    return this._http.post<any>('http://localhost:8085/employeepayroll/salary/salaries',salary);
   }


   updateSalaryToRemote(salary: Salary): Observable<any>{
    return this._http.post<any>('http://localhost:8085/employeepayroll/salary/salaries',salary);
  }

  fetchSalaryByIdFromRemote(id: number): Observable<any> {
    return this._http.get<any>('http://localhost:8085/employeepayroll/salary/salaries/'+id);
  }

  fetchSalaryByempId(empId: number): Observable<any> {
    empId = this.dservice.empIds;
    console.log("sal by empid",empId)
    return this._http.get<any>('http://localhost:8085/employeepayroll/salary/empid/'+ empId);
  }
// deleteSalaryByIdFromRemote(id: number): Observable<any> {
//     return this._http.delete<any>('http://localhost:8081/deletesalary/'+id);
//   }

  deleteSalaryBdyIdFromRemote(id: number): Observable<any> {
    return this._http.delete<any>('http://localhost:8085/employeepayroll/salary/salaries/' + id);
  }

}
