import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onLogin(loginForm: NgForm) {
    if (loginForm.valid) {
      console.log(loginForm);
    } else {
      alert('False');
    }
  }
  onRegister() {
    this.router.navigate(['register']);
  }
}
