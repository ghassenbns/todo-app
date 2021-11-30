import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import { UserAuthService } from '../shared/user-auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  constructor(private userService: UserAuthService) {}

  ngOnInit() {}
  register(registerForm: NgForm) {
    if (
      registerForm.valid &&
      registerForm.value.password === registerForm.value.confirm
    ) {
      const user = new User(
        registerForm.value.name,
        registerForm.value.email,
        registerForm.value.password,
        []
      );
      this.userSubscription = this.userService
        .registerUser(user)
        .subscribe((response) => console.log(response));
    }
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
