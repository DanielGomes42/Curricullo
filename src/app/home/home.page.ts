import { Component, OnInit } from '@angular/core';
import { CurriculumSection } from '../models/curriculum';
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
<<<<<<< HEAD


  textoVisivel = false;
=======
>>>>>>> 0b9b983ab605a6c9e988c7cda8ec1137935ec4cb
    items = [
        { name: 'teste', description: 'Descrição do Item 1' },
        { name: 'Item 2', description: 'Descrição do Item 2' },
        { name: 'Item 3', description: 'Descrição do Item 3' },
    ];

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
        //mostra loader enum(loaderaction) usa para colocar id no loader
        this.curriculumService.getCurriculumData().subscribe(
            (response) => {
                this.loaderService.hideLoader(LoaderAction.curriculum); //esconde
                this.curriculumData = response.body[0].sections; // pega a info que veio do back-end  o primeiro
                this.toastService.showToast('Curriculo carregado com sucesso');

                console.log(response);
            },
            (error) => {
                this.loaderService.hideLoader(LoaderAction.curriculum);
                this.toastService.showToast('Não foi possível carregar o currículo'); //ideal mostra o erro do back
            },
        );
    }

    async handleUpdateUser(): Promise<void> {
        await this.loaderService.showLoader('Atualizado usuário...', LoaderAction.randomUser); // passo o enum com o id
        this.curriculumService.getRandomUser().subscribe(
            async (data: RandomUser[]) => {
                // retorno do back end mapeado
                const currentRandomUsers: RandomUser[] = await this.storageService.getValue(
                    // lendo a informação que já tem
                    StorageKey.randomUsers, //
                );

                if (currentRandomUsers && currentRandomUsers.length > 0) {
                    this.storageService.setValue(
                        // set salva a info na chave
                        StorageKey.randomUsers, //salva no storege
                        currentRandomUsers.concat(data),
                    );
                } else {
                    this.storageService.setValue(StorageKey.randomUsers, data);
                }
                console.log(
                    await this.storageService.getValue(
                        StorageKey.randomUsers, // le os users offline
                    ),
                );
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




    mostrarTexto() {
      this.textoVisivel = true;
    }

    alternarTexto() {
      this.textoVisivel = !this.textoVisivel;
    }
}
