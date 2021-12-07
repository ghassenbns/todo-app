import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserAuthService } from './shared/user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class RelogGuardService implements CanActivate {
  constructor(private userService: UserAuthService, private router: Router) {}
  //Auth guard to protect login and register route from  logged in user
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.uid === null) {
      //if actual user id is  empty returns true (can get access to register&login route)
      return true;
    } else {
      //else navigate user to todo-list
      this.router.navigate(['todo-list']);
    }
  }
}
