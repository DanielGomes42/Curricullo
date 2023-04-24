import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

export enum LoaderAction { // enum limita as possibilidades
    curriculum = 'curriculum',
    randomUser = 'randomUser',
}

@Injectable({
    providedIn: 'root',
})
export class LoaderService {
    constructor(private loaderController: LoadingController) {}

    async showLoader(message: string, id: LoaderAction): Promise<void> {
        const loader: HTMLIonLoadingElement = await this.loaderController.create({
            //chama o loader
            message,
            spinner: 'crescent',
            id, //randomUser
        });

        loader.present();
    }

    async hideLoader(id: LoaderAction): Promise<void> {
        await this.loaderController.dismiss(null, null, id); //fecha exatamente o loader que carregou diismiss
    }
}
