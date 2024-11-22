import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from './registration.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRouteGuard implements CanActivate {
  constructor(private router: Router, private service: RegistrationService) {}
  
  msg:any;
  user = new User();

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const email=sessionStorage.getItem("email") || null;
      const password=sessionStorage.getItem("password") || null;
      if(email && password) {
        // if user loggedin then return true
        console.log(`${email}, and password: ${password}`);
        // this.service.loginUserFromRemote(this.user).subscribe(
        //   data =>{
        //     console.log(data)
        //     console.log("response recieved");
        console.log(`${email}, and password: ${password}`);
        return true;
      }
      else {
        // if user not loggedin then return false
        this.msg="Bad credentials, please enter valid emailId and password";
        this.router.navigate(['/dashboard']);
        return false
      }
    }
  }

  