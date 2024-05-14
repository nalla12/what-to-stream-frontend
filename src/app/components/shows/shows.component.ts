import {Component, computed, inject, Signal, WritableSignal} from '@angular/core';
import {ShowsService} from '../../services/shows.service';
import {Show} from '../../interfaces/show';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatOption} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {Genre} from '../../interfaces/genre';
import {FilterService} from '../../services/filter.service';

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
    private filterService: FilterService = inject(FilterService);
    showsList: Show[] = [];

    filterTitle: WritableSignal<string>;
    filteredShowsList: Signal<Show[]> = computed(() => {
        const newTitle = this.filterTitle();

        if (!newTitle) return this.showsList;

        return this.showsList.filter(show => {
            return show.title.toLowerCase().includes(newTitle);
        });
    });

    constructor() {
        this.showsService.getShows().subscribe((shows: Show[]) => {
            this.showsList = shows;
        })

        this.filterTitle = this.filterService.title;
    }

    genresAsString(genres: Genre[]): string {
        return genres.map(genre => genre.name).join(', ');
    }
}
