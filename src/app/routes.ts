import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        data: { title: 'Anime details' }
    }
];

export default routeConfig;