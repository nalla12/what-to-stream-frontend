import {Component} from '@angular/core';
import {FiltersComponent} from '../filters/filters.component';
import {SearchComponent} from '../search/search.component';

@Component({
    selector: 'app-filters-bottom-sheet',
    standalone: true,
    imports: [
        FiltersComponent,
        SearchComponent
    ],
    templateUrl: './filters-bottom-sheet.component.html',
    styleUrl: './filters-bottom-sheet.component.scss'
})
export class FiltersBottomSheetComponent {
}
