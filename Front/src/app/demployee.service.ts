import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpRegistraionService } from './emp-registraion.service';
import { Employee } from './employee';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { TimesheetService } from './timesheet.service';

@Injectable({
  providedIn: 'root'
})
export class DemployeeService {
  employees: Employee;
  private baseURL = "http://localhost:8085/employeepayroll/emp";
  public empIds: number;
  timesheet: any;
  salary: any;

  constructor(private httpClient: HttpClient,private route: ActivatedRoute, private emps:EmpRegistraionService,
    private router: Router, private tss: TimesheetService,
    ) { }
    
    
  getEmployeeByEmailId(empId: any): Observable<Employee[]>{
    this.empIds = this.emps.getMessage()
    console.log("in ED-service",this.empIds)
    empId = this.empIds;
    this.timesheet = this.tss.getTimesheetById(empId);
    console.log(this.timesheet);
return this.httpClient.get<Employee[]>(`${this.baseURL}/${empId}`)
  }

  updateEmployee(empId: number, admin: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${empId}`,admin);
  }


}