import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:mal_id',
        component: DetailsComponent,
        title: 'Anime details'
    }
];

export default routeConfig;