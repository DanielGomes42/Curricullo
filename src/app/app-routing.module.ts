import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CollaboratorPage } from './pages/Colaborator/collaborator/collaborator.page';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'collaborator',
        loadChildren: () =>
            import('./pages/Colaborator/collaborator/collaborator.page').then((m) => m.CollaboratorPage),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
