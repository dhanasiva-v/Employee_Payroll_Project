import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leave } from './leave';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {


  private baseURL="http://localhost:8085/employeepayroll/leave/leaves";

  constructor(private HttpClient: HttpClient) { }

  getLeavesList():Observable<Leave[]>{
    return this.HttpClient.get<Leave[]>(`${this.baseURL}`);
  }

  createLeave(leave:Leave):Observable<object>{
    return this.HttpClient.post(`${this.baseURL}`,leave);
  }
  getLeaveByEmpId(empId: number): Observable<Leave>{
    return this.HttpClient.get<Leave>(`http://localhost:8085/employeepayroll/leave/${empId}`);
  }

  deleteLeave(empId: number):Observable<object>{
    return this.HttpClient.delete(`${this.baseURL}/${empId}`);
  }
  }

