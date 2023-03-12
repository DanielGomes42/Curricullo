import { Component, OnInit } from '@angular/core';
import { CurriculumSection } from '../models/curriculum/curriculum-section';
import { CurriculumService, RandomUser } from '../services/curriculum.service';
import { NavController } from '@ionic/angular';
import { LoaderAction, LoaderService } from '../services/loader.service';
import { ToastService } from '../services/toast.service';
import { StorageKey, StorageService } from '../services/storage.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    curriculumData: CurriculumSection[];

    constructor(
        private curriculumService: CurriculumService,
        private navCtrl: NavController,
        private loaderService: LoaderService,
        private toastService: ToastService,
        private storageService: StorageService,
    ) {}

    ngOnInit(): void {
        this.getCurriculumData();
    }

    // Não foi implementado loader com duração fixa, pois o ideal é esconddê-lo após a operação assíncrona ter finalizado
    async getCurriculumData(): Promise<void> {
        await this.loaderService.showLoader('Carregando currículo...', LoaderAction.curriculum);
        this.curriculumService.getCurriculumData().subscribe(
            (response) => {
                this.loaderService.hideLoader(LoaderAction.curriculum);
                this.curriculumData = response.body[0].sections;
                this.toastService.showToast('Curriculo carregado com sucesso');

                console.log(response);
            },
            (error) => {
                this.loaderService.hideLoader(LoaderAction.curriculum);
                this.toastService.showToast('Não foi possível carregar o currículo');
            },
        );
    }

    async handleUpdateUser(): Promise<void> {
        await this.loaderService.showLoader('Atualizado usuário...', LoaderAction.randomUser);
        this.curriculumService.getRandomUser().subscribe(
            async (data: RandomUser[]) => {
                const currentRandomUsers: RandomUser[] = await this.storageService.getValue(
                    StorageKey.randomUsers,
                );

                if (currentRandomUsers && currentRandomUsers.length > 0) {
                    this.storageService.setValue(
                        StorageKey.randomUsers,
                        currentRandomUsers.concat(data),
                    );
                } else {
                    this.storageService.setValue(StorageKey.randomUsers, data);
                }

                this.loaderService.hideLoader(LoaderAction.randomUser);
                this.toastService.showToast('Usuário atualizado com sucesso');
            },
            (error) => {
                this.loaderService.hideLoader(LoaderAction.randomUser);
                this.toastService.showToast('Não foi possível atualizar o usuário');
            },
        );
    }

    navigateProfile() {
        this.navCtrl.navigateForward('/collaborator');
    }
}
