import {Component} from '@angular/core';
import {FiltersComponent} from '../filters/filters.component';
import {MatButton} from '@angular/material/button';
import {SearchComponent} from '../search/search.component';
import {FilteredShowsComponent} from '../filtered-shows/filtered-shows.component';

@Component({
    selector: 'app-results-page',
    standalone: true,
    imports: [
        FiltersComponent,
        MatButton,
        SearchComponent,
        FilteredShowsComponent
    ],
    templateUrl: './results-page.component.html',
    styleUrl: './results-page.component.scss'
})
export class ResultsPageComponent {

}
