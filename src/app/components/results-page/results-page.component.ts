import {Component, inject, NgZone, OnDestroy} from '@angular/core';
import {FiltersComponent} from '../filters/filters.component';
import {MatButtonModule} from '@angular/material/button';
import {SearchComponent} from '../search/search.component';
import {FilteredShowsComponent} from '../filtered-shows/filtered-shows.component';
import {MatIconModule} from '@angular/material/icon';
import {ViewportRuler} from '@angular/cdk/overlay';

@Component({
    selector: 'app-results-page',
    standalone: true,
    imports: [
        FiltersComponent,
        SearchComponent,
        FilteredShowsComponent,
        MatButtonModule,
        MatIconModule
    ],
    templateUrl: './results-page.component.html',
    styleUrl: './results-page.component.scss'
})
export class ResultsPageComponent implements OnDestroy{
    showBottomSheet: boolean = window.innerWidth < 768;
    isSmallScreen: boolean = true;
    private readonly viewportRuler: ViewportRuler = inject(ViewportRuler);
    private readonly ngZone: NgZone = inject(NgZone);
    private readonly viewportChange = this.viewportRuler
        .change(200)
        .subscribe(() => this.ngZone.run(() => this.setSize()));

    constructor() {
        this.setSize();
    }

    private setSize() {
        const { width } = this.viewportRuler.getViewportSize();

        if (width < 769) {
            this.isSmallScreen = true;
        } else {
            this.isSmallScreen = false;
        }
    }

    openBottomSheet() {
        console.log('clicked')
    }

    ngOnDestroy() {
        this.viewportChange.unsubscribe();
    }
}
