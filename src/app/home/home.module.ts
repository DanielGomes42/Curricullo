import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PersonalDataComponent } from '../components/personal-data/personal-data.component';
import { EducationLevelComponent } from '../components/education-level/education-level.component';
import { LanguageComponent } from '../components/language/language.component';
import { ProfessionalHistoryComponent } from '../components/professional-history/professional-history.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
    declarations: [
        HomePage,
        PersonalDataComponent,
        EducationLevelComponent,
        LanguageComponent,
        ProfessionalHistoryComponent,
    ],
})
export class HomePageModule {}
