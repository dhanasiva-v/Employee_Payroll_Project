import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  private baseURL = "http://localhost:8085/employeepayroll/ad/admins";
  empId:any;
  setMessage(data: any)
  {
    //this.empId1=this.empId;
    this.empId=data;
    console.log("adms EmpId1",this.empId)
  }
  getMessage()
{
  return this.empId;
}
  constructor(private httpClient: HttpClient) {}

  // public findAll(): Observable<Admin[]> {
  //   return this.httpClient.get<Admin[]>(this.baseURL);
  // }
  
  getEmployeesList(): Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Admin): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(empId:number): Observable<Admin>{
    //empId= this.getMessage1();
    console.log("from adms",empId)
    
return this.httpClient.get<Admin>(`http://localhost:8085/employeepayroll/ad/${empId}`);
  }

  updateEmployee(empId: number, admin: Admin): Observable<Object>{
    return this.httpClient.put(`http://localhost:8085/employeepayroll/ad/${empId}`,admin);
  }

  deleteEmployee(empId: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8085/employeepayroll/ad/${empId}`);

  }
}
