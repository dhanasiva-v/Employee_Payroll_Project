import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpRegistraionService } from './emp-registraion.service';
import { Timesheet } from './timesheet';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
  empId1:any;
  private baseURL ="http://localhost:8085/employeepayroll/time/timesheets";

  constructor(private httpClient: HttpClient,public emps: EmpRegistraionService) { }

  getTimesheetsList(): Observable<Timesheet[]>{
    return this.httpClient.get<Timesheet[]>(`${this.baseURL}`);
  }

  createTimesheet(timesheet: Timesheet): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, timesheet);
  }

  getTimesheetById(empId: number): Observable<Timesheet>{
    this.empId1 = this.emps.getMessage();
    console.log(this.empId1)
    return this.httpClient.get<Timesheet>(`${this.baseURL}/${empId}`);
  }

  updateTimesheet(empId: number, timesheet: Timesheet): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${empId}`, timesheet);
  }

  deleteTimesheet(empId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${empId}`);
  }
}
