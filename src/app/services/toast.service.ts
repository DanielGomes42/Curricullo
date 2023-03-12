import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    constructor(private toastController: ToastController) {}

    async showToast(message: string): Promise<void> {
        const toast: HTMLIonToastElement = await this.toastController.create({
            message,
            duration: 1500,
        });

        toast.present();
    }
}
