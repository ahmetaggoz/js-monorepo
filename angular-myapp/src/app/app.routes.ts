import { Routes } from '@angular/router';
import { SayfalarComponent } from './sayfalar/sayfalar.component';
import { ProjelerComponent } from './projeler/projeler.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';

export const routes: Routes = [
    {
        path: '', component: AnasayfaComponent
    },
    {
        path: 'hakkimda', component: SayfalarComponent
    },
    {
        path: 'projeler', component: ProjelerComponent
    }
];
