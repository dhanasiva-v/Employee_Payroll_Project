import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class EmploginGuard implements CanActivate {
  constructor(private router: Router, private service: RegistrationService,
    ) {}
  msg:any;
  empId1:any

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //this.empId1 = sessionStorage.setItem("empId",sessionStorage.getItem("empId")) || null
      const email=sessionStorage.getItem("email") || null;
      const pwd=sessionStorage.getItem("pwd") || null;
      const sessemp=sessionStorage.getItem("empId") || null;

      if(email && pwd && sessemp) {
        // if user loggedin then return true
        console.log(`${email}, and pwd: ${pwd}, ${sessemp}`);
        // this.service.loginUserFromRemote(this.user).subscribe(
        //   data =>{
        //     console.log(data)
        //     console.log("response recieved");
        //console.log(`${email}, and pwd: ${pwd},`);
        return true;
      }
      else {
        // if user not loggedin then return false
        this.msg="Bad credentials, please enter valid emailId and password";
        alert('Invalid credentials');
        this.router.navigate(['/dashboard']);
        return false
      }
    }
  }