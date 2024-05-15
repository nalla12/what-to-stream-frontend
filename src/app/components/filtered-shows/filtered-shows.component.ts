import {Component, inject, WritableSignal} from '@angular/core';
import {ShowsComponent} from '../shows/shows.component';
import {ShowsService} from '../../services/shows.service';
import {FilterService} from '../../services/filter.service';
import {Show} from '../../interfaces/show';

@Component({
  selector: 'app-filtered-shows',
  standalone: true,
    imports: [
        ShowsComponent
    ],
  templateUrl: './filtered-shows.component.html',
  styleUrl: './filtered-shows.component.scss'
})
export class FilteredShowsComponent {
    private showsService: ShowsService = inject(ShowsService);
    private filterService: FilterService = inject(FilterService);
    filteredShowsList: WritableSignal<Show[]> = this.filterService.filteredList;

    constructor() {
        if (!this.filterService.filteredList().length) {
            this.showsService.getShows().subscribe((shows: Show[]) => {
                this.filterService.shows = shows;
            })
        }
    }
}
