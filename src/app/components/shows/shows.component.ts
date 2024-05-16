import {Component, Input} from '@angular/core';
import {Show} from '../../interfaces/show';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatOption} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {RouterLink} from '@angular/router';
import {genresAsString} from '../../utils';

@Component({
    selector: 'app-shows',
    standalone: true,
    imports: [
        MatGridList,
        MatGridTile,
        MatOption,
        MatCardModule,
        RouterLink
    ],
    templateUrl: './shows.component.html',
    styleUrl: './shows.component.scss'
})
export class ShowsComponent {
    @Input() showsList: Show[] | undefined;
    protected readonly genresAsString = genresAsString;
}
