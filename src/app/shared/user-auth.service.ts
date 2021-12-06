import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserAuthService {
  uid: string = null;
  constructor(public auth: AngularFireAuth, private router: Router) {}
  registerUser(user: User) {
    console.log(user);
    this.auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        this.uid = res.user.uid;
        this.router.navigate(['todo-list']);
      })
      .catch((err) => console.log(err));
  }
  loginUser(user: any) {
    this.auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        this.uid = res.user.uid;
        this.router.navigate(['todo-list']);
      })
      .catch((err) => console.log(err));
  }
}
/*this.fDB
      .list('users')
      .push(user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err)); */
