import {Component} from '@angular/core';
import {FiltersComponent} from '../filters/filters.component';
import {SearchComponent} from '../search/search.component';
import {ShowsComponent} from '../shows/shows.component';
import {MatDivider} from '@angular/material/divider';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        FiltersComponent,
        SearchComponent,
        ShowsComponent,
        MatDivider,
        MatButton,
        RouterLink
    ],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
