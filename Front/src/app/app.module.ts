import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { EmpregistrationComponent } from './empregistration/empregistration.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';
import { CheckempdetailsComponent } from './checkempdetails/checkempdetails.component';
import { EmpchangepasswordComponent } from './empchangepassword/empchangepassword.component';
import { CreateattendanceComponent } from './createattendance/createattendance.component';
import { CreatetimesheetComponent } from './createtimesheet/createtimesheet.component';
import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';
import { UpdateTimesheetComponent } from './update-timesheet/update-timesheet.component';
import { CreateLeaveComponent } from './create-leave/create-leave.component';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { AddsalaryComponent } from './addsalary/addsalary.component';
import { EditsalaryComponent } from './editsalary/editsalary.component';
import { SalarylistComponent } from './salarylist/salarylist.component';
import { ViewsalaryComponent } from './viewsalary/viewsalary.component';
import { CreatescheduleComponent } from './createschedule/createschedule.component';
import { SchedulelistComponent } from './schedulelist/schedulelist.component';
import { UpdatescheduleComponent } from './updateschedule/updateschedule.component';
import { PayslipComponent } from './payslip/payslip.component';
import { EmployeeattendanceComponent } from './employeeattendance/employeeattendance.component';
import { EmployeetimesheetComponent } from './employeetimesheet/employeetimesheet.component';
import { EmployeescheduleComponent } from './employeeschedule/employeeschedule.component';
import { EmployeeleaveComponent } from './employeeleave/employeeleave.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmploginComponent,
    EmpregistrationComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    EmployeedashboardComponent,
    AttendanceListComponent,
    EmployeeupdateComponent,
    CheckempdetailsComponent,
    EmpchangepasswordComponent,
    CreateattendanceComponent,
    CreatetimesheetComponent,
    TimesheetListComponent,
    UpdateTimesheetComponent,
    CreateLeaveComponent,
    LeaveListComponent,
    AddsalaryComponent,
    EditsalaryComponent,
    SalarylistComponent,
    ViewsalaryComponent,
    CreatescheduleComponent,
    SchedulelistComponent,
    UpdatescheduleComponent,
    PayslipComponent,
    EmployeeattendanceComponent,
    EmployeetimesheetComponent,
    EmployeescheduleComponent,
    EmployeeleaveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
