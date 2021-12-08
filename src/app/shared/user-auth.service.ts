import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ToastService } from './toast.service';

@Injectable({ providedIn: 'root' })
export class UserAuthService {
  uid: string = null; //Authenticated user id
  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private toastService: ToastService
  ) {}

  registerUser(user: User) {
    //register user by email and password method of firebase auth
    console.log(user);
    this.auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        this.uid = res.user.uid;
        this.router.navigate(['todo-list']);
      })
      .catch((err) => this.toastService.openToast(err, 'danger'));
  }

  loginUser(user: any) {
    //sign in user by email and password method of firebase auth then set his user id and navigate to todo-list
    this.auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        this.uid = res.user.uid;
        this.router.navigate(['todo-list']);
      })
      .catch((err) => this.toastService.openToast(err, 'danger'));
  }
  logout() {
    //Reset User id and navigate to login
    this.uid = null;
    this.router.navigate(['login']);
  }
}
