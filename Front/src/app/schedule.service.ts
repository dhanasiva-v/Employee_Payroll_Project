import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Schedule } from './schedule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private baseURL="http://localhost:8085/employeepayroll/schedule/schedules";

  constructor(private HttpClient:HttpClient) { }

  getScheduleList():Observable<Schedule[]>{
    return this.HttpClient.get<Schedule[]>(`${this.baseURL}`);
  }

  createSchedule(Schedule:Schedule):Observable<object>{
    return this.HttpClient.post(`${this.baseURL}`,Schedule);
  }
  getScheduleByEmpId(empId: number): Observable<Schedule>{
    return this.HttpClient.get<Schedule>(`${this.baseURL}/${empId}`);
  }
  updateSchedule(empId: number, Schedule: Schedule): Observable<Object>{
    return this.HttpClient.put(`${this.baseURL}/${empId}`, Schedule);
  }


  deleteSchedule(empId: number):Observable<object>{
    return this.HttpClient.delete(`${this.baseURL}/${empId}`);
  }
  }
