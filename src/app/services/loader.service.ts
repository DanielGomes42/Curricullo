import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

export enum LoaderAction {
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
            message,
            spinner: 'crescent',
            id,
        });

        loader.present();
    }

    async hideLoader(id: LoaderAction): Promise<void> {
        await this.loaderController.dismiss(null, null, id);
    }
}
