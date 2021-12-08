import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import { UserAuthService } from '../shared/user-auth.service';
import { ToastService } from '../shared/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private userService: UserAuthService,
    private toastService: ToastService
  ) {}

  ngOnInit() {}
  //check if register form is valid then register user
  register(registerForm: NgForm) {
    if (
      registerForm.valid &&
      registerForm.value.password === registerForm.value.confirm
    ) {
      const user = new User(
        registerForm.value.email,
        registerForm.value.password
      );
      this.userService.registerUser(user);
    } else {
      this.toastService.openToast('Register Form is invalid', 'warning');
    }
  }
}
