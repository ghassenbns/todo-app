import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Validators } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class UserAuthService {
  uid: string = null; //Authenticated user id
  constructor(public auth: AngularFireAuth, private router: Router, private alert: AlertController ,private toast : ToastController) {}

  registerUser(user: User) {
    //register user by email and password method of firebase auth
    console.log(user);
    this.auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        this.uid = res.user.uid;
        this.router.navigate(['todo-list']);
        this.welcomeMsg('Welcome',user.email);

      })
      .catch((err) => this.showAlert('Erreur',err));
  }

  loginUser(user: any) {
    //sign in user by email and password method of firebase auth then set his user id and navigate to todo-list
    this.auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        this.uid = res.user.uid;
        this.router.navigate(['todo-list']);
        this.welcomeMsg('Welcome',user.email)     
      })
      .catch((err) => this.showAlert('Erreur',err))
       //console.log("Firebase failure: " + JSON.stringify(err)))
  }
  
    //logout user method of firebase auth
  logout() {
    console.log("logout clicked");
    this.auth.signOut().then(() => {
      this.router.navigate(['login']);
    })
  }

  //Welcoming message alert 
  async welcomeMsg(header,message){
    const welcome =await this.alert.create({
      header:header,
      message:message,
      buttons:['Thank you'],
    });
    await welcome.present();
  };

//Alert toast for errors inputs 
  async showAlert (header,err) {
    const alert = await this.toast.create({
      header: header,
      message: err,
      buttons: ['ok']
    });
    await alert.present();
};

}
