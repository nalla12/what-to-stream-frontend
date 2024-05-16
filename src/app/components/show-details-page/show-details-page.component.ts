import {Component, inject, OnInit} from '@angular/core';
import {ShowsService} from '../../services/shows.service';
import {Show} from '../../interfaces/show';
import {ActivatedRoute} from '@angular/router';
import {NgStyle} from '@angular/common';
import {genresAsString} from '../../utils';
import {StreamingOption} from '../../interfaces/streaming-option';

@Component({
    selector: 'app-show-details-page',
    standalone: true,
    imports: [
        NgStyle
    ],
    templateUrl: './show-details-page.component.html',
    styleUrl: './show-details-page.component.scss'
})
export class ShowDetailsPageComponent implements OnInit {
    private route: ActivatedRoute = inject(ActivatedRoute);
    private showsService: ShowsService = inject(ShowsService);
    show: Show | undefined;
    availableWithSub: StreamingOption[] = [];
    availableToBuy: StreamingOption[] = [];
    availableToRent: StreamingOption[] = [];

    protected readonly genresAsString = genresAsString;

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
            });
    }

    ngOnInit() {
        this.getShow();
    }
}
