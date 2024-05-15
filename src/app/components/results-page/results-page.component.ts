import {Component, inject, NgZone, OnDestroy} from '@angular/core';
import {FiltersComponent} from '../filters/filters.component';
import {MatButtonModule} from '@angular/material/button';
import {SearchComponent} from '../search/search.component';
import {FilteredShowsComponent} from '../filtered-shows/filtered-shows.component';
import {MatIconModule} from '@angular/material/icon';
import {ViewportRuler} from '@angular/cdk/overlay';
import {MatBottomSheet, MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {FiltersBottomSheetComponent} from '../filters-bottom-sheet/filters-bottom-sheet.component';

@Component({
    selector: 'app-results-page',
    standalone: true,
    imports: [
        FiltersComponent,
        SearchComponent,
        FilteredShowsComponent,
        MatButtonModule,
        MatIconModule,
        MatBottomSheetModule
    ],
    templateUrl: './results-page.component.html',
    styleUrl: './results-page.component.scss'
})
export class ResultsPageComponent implements OnDestroy{
    isSmallScreen: boolean = true;
    private _bottomSheet: MatBottomSheet = inject(MatBottomSheet);
    readonly viewportRuler: ViewportRuler = inject(ViewportRuler);
    readonly ngZone: NgZone = inject(NgZone);
    readonly viewportChange = this.viewportRuler
        .change(200)
        .subscribe(() => this.ngZone.run(() => this.setSize()));

    constructor() {
        this.setSize();
    }

    private setSize() {
        const { width } = this.viewportRuler.getViewportSize();
        this.isSmallScreen = width < 769;
    }

    openBottomSheet(): void {
        console.log('clicked');
        this._bottomSheet.open(FiltersBottomSheetComponent);
    }

    ngOnDestroy() {
        this.viewportChange.unsubscribe();
    }
}
