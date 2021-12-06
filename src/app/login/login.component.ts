import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../shared/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private userService: UserAuthService) {}

  ngOnInit() {}

  onLogin(loginForm: NgForm) {
    this.userService.loginUser(loginForm.value);
  }
  onRegister() {
    this.router.navigate(['register']);
  }
}
