import {Component, inject, NgZone, OnDestroy, OnInit} from '@angular/core';
import {ShowsService} from '../../services/shows.service';
import {Show} from '../../interfaces/show';
import {ActivatedRoute} from '@angular/router';
import {NgStyle, TitleCasePipe} from '@angular/common';
import {StreamingOption} from '../../interfaces/streaming-option';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ViewportRuler} from '@angular/cdk/overlay';

@Component({
    selector: 'app-show-details-page',
    standalone: true,
    imports: [
        NgStyle,
        TitleCasePipe,
        MatChipsModule,
        MatProgressSpinnerModule
    ],
    templateUrl: './show-details-page.component.html',
    styleUrl: './show-details-page.component.scss'
})
export class ShowDetailsPageComponent implements OnInit, OnDestroy {
    private route: ActivatedRoute = inject(ActivatedRoute);
    private showsService: ShowsService = inject(ShowsService);
    show: Show | undefined;
    availableWithSub: StreamingOption[] = [];
    availableToBuy: StreamingOption[] = [];
    availableToRent: StreamingOption[] = [];
    posterUrl: string = '';

    // Detect if screen is small
    isSmallScreen: boolean = true; // TODO: detect orientation instead
    readonly viewportRuler: ViewportRuler = inject(ViewportRuler);
    readonly ngZone: NgZone = inject(NgZone);
    readonly viewportChange = this.viewportRuler
        .change(300)
        .subscribe(() => this.ngZone.run(() => this.setSize()));

    constructor() {
        this.setSize();
    }

    getShow(): void {
        const routeId = Number(this.route.snapshot.paramMap.get('id'));
        this.showsService.getShowById(routeId)
            .subscribe((show: Show) => {
                this.show = show;
                show.streamingOptions.dk.forEach(option => {
                    if (option.type === 'subscription') {
                        this.availableWithSub.push(option)
                    }
                    if (option.type === 'buy') {
                        this.availableToBuy.push(option)
                    }
                    if (option.type === 'rent') {
                        this.availableToRent.push(option)
                    }
                })

                if (this.isSmallScreen && this.show) {
                    this.posterUrl = this.show.imageSet.verticalPoster.w720;
                } else if (!this.isSmallScreen && this.show) {
                    this.posterUrl = this.show.imageSet.horizontalPoster.w1080;
                }
            });
    }

    private setSize() {
        const { width } = this.viewportRuler.getViewportSize();
        this.isSmallScreen = width < 769;
        if (this.isSmallScreen && this.show) {
            this.posterUrl = this.show.imageSet.verticalPoster.w720;
        } else if (!this.isSmallScreen && this.show) {
            this.posterUrl = this.show.imageSet.horizontalPoster.w1080;
        }
    }

    ngOnDestroy() {
        this.viewportChange.unsubscribe();
    }

    ngOnInit() {
        this.getShow();
    }
}
