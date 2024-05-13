import { Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ShowsComponent} from './components/shows/shows.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        title: 'What To Stream'
    },
    {
        path: 'shows',
        component: ShowsComponent,
        title: 'All shows'
    },
];
