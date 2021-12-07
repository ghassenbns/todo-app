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
export class AuthGuardService implements CanActivate {
  constructor(private userService: UserAuthService, private router: Router) {}
  //Auth guard to protect todo list route from not logged in user
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.uid !== null) {
      //if actual user id is not empty returns true (can get access to todo-list route)
      return true;
    } else {
      //else navigate user to login
      this.router.navigate(['login']);
    }
  }
}
