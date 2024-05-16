import {Component, Input} from '@angular/core';
import {Show} from '../../interfaces/show';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatOption} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {Genre} from '../../interfaces/genre';
import {RouterLink} from '@angular/router';

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

    genresAsString(genres: Genre[]): string {
        return genres.map(genre => genre.name).join(', ');
    }
}
