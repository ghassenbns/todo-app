import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private toastController: ToastController) {}
  async openToast(msg: string, messageType: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      animated: true,
      color: messageType,
    });
    toast.present();
  }
}
