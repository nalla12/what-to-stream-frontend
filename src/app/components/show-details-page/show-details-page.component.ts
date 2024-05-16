import {Component, inject, OnInit} from '@angular/core';
import {ShowsService} from '../../services/shows.service';
import {Show} from '../../interfaces/show';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-details-page',
  standalone: true,
  imports: [],
  templateUrl: './show-details-page.component.html',
  styleUrl: './show-details-page.component.scss'
})
export class ShowDetailsPageComponent implements OnInit {
    private route: ActivatedRoute = inject(ActivatedRoute);
    private showsService: ShowsService = inject(ShowsService);
    show: Show | undefined;

    constructor() {}

    getShow(): void {
        const routeId = Number(this.route.snapshot.paramMap.get('id'));
        this.showsService.getShowById(routeId)
            .subscribe((shows: Show) => this.show = shows);
    }

    ngOnInit() {
        this.getShow();
    }
}
