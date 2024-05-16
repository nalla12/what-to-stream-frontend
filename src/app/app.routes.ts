import { Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ResultsPageComponent} from './components/results-page/results-page.component';
import {ShowDetailsPageComponent} from './components/show-details-page/show-details-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        title: 'What To Stream'
    },
    {
        path: 'results',
        component: ResultsPageComponent,
        title: 'What To Stream'
    },
    {
        path: 'details/:id',
        component: ShowDetailsPageComponent,
        title: 'Details'
    },
];
