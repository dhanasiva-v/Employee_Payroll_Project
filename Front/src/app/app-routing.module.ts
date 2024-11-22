import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddsalaryComponent } from './addsalary/addsalary.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { CheckempdetailsComponent } from './checkempdetails/checkempdetails.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateLeaveComponent } from './create-leave/create-leave.component';
import { CreateattendanceComponent } from './createattendance/createattendance.component';
import { CreatescheduleComponent } from './createschedule/createschedule.component';
import { CreatetimesheetComponent } from './createtimesheet/createtimesheet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditsalaryComponent } from './editsalary/editsalary.component';
import { EmpchangepasswordComponent } from './empchangepassword/empchangepassword.component';
import { EmploginGuard } from './emplogin.guard';
import { EmploginComponent } from './emplogin/emplogin.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRouteGuard } from './employee-route.guard';
import { EmployeeattendanceComponent } from './employeeattendance/employeeattendance.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { EmployeeleaveComponent } from './employeeleave/employeeleave.component';
import { EmployeescheduleComponent } from './employeeschedule/employeeschedule.component';
import { EmployeetimesheetComponent } from './employeetimesheet/employeetimesheet.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';
import { EmpregistrationComponent } from './empregistration/empregistration.component';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { LoginComponent } from './login/login.component';
import { PayslipComponent } from './payslip/payslip.component';
import { RegistrationComponent } from './registration/registration.component';
import { SalarylistComponent } from './salarylist/salarylist.component';
import { SchedulelistComponent } from './schedulelist/schedulelist.component';
import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateTimesheetComponent } from './update-timesheet/update-timesheet.component';
import { UpdatescheduleComponent } from './updateschedule/updateschedule.component';
import { ViewsalaryComponent } from './viewsalary/viewsalary.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'Admins', component: EmployeeListComponent},
  {path: 'createemployee', component: CreateEmployeeComponent},
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'updateemployee/:empId', component: UpdateEmployeeComponent},
  {path:'emplogin',component: EmploginComponent},
  {path:'loginsuccess',component:EmployeeListComponent,
  canActivate:[EmployeeRouteGuard]},

  {path:'registeration',component:EmpregistrationComponent},
  {path:'registeradm',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'emploginsuccess',component: EmployeedashboardComponent,
  canActivate:[EmploginGuard]},
 
  {path:'empattendance',component: AttendanceListComponent},
  {path:'employeeupdate/:empId',component: EmployeeupdateComponent},
  {path:'checkempdetails',component:CheckempdetailsComponent},
  {path:'empchangepassword/:empId',component:EmpchangepasswordComponent},
  {path:'createattendance',component: CreateattendanceComponent},
  {path:'createtimesheet',component: CreatetimesheetComponent},
  {path:'timesheetlist',component: TimesheetListComponent},
  {path:'updatetimesheet/:empId',component: UpdateTimesheetComponent},
  {path:'attendancelist',component: AttendanceListComponent},
  {path:'leavelist',component: LeaveListComponent},
  {path:'createleave',component: CreateLeaveComponent},
  {path:'addsalary',component: AddsalaryComponent},
  {path:'salarylist',component: SalarylistComponent},
  {path:'editsalary/:salId',component: EditsalaryComponent},
  {path:'viewsalary/:salId',component: ViewsalaryComponent},
  {path:'schedulelist',component: SchedulelistComponent},
  {path:'createschedule',component: CreatescheduleComponent},
  {path:'updateschedule/:empId',component: UpdatescheduleComponent},
  {path:'viewsalary/:empId',component: ViewsalaryComponent},
  {path:'payslip',component: PayslipComponent},
  {path:'employeeattendance/:empId',component: EmployeeattendanceComponent},
  {path:'employeetimesheet/:empId',component: EmployeetimesheetComponent},
  {path:'employeeschedule/:empId',component: EmployeescheduleComponent},
  {path:'employeeleave/:empId',component: EmployeeleaveComponent},
  {path:'viewschedule/:salId',component: ViewsalaryComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
