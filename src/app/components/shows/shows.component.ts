import {Component, inject} from '@angular/core';
import {ShowsService} from '../../services/shows.service';
import {Show} from '../../interfaces/show';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatOption} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {Genre} from '../../interfaces/genre';

@Component({
    selector: 'app-shows',
    standalone: true,
    imports: [
        MatGridList,
        MatGridTile,
        MatOption,
        MatCardModule
    ],
    templateUrl: './shows.component.html',
    styleUrl: './shows.component.scss'
})
export class ShowsComponent {
    private showsService: ShowsService = inject(ShowsService);
    showsList: Show[] = [];

    constructor() {
        this.showsService.getShows().subscribe((shows: Show[]) => {
            this.showsList = shows;
        })
    }

    getGenresString(genres: Genre[]): string {
        return genres.map(genre => genre.name).join(', ');
    }
}
