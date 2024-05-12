import { Component } from '@angular/core';
import {FiltersComponent} from '../filters/filters.component';
import {SearchComponent} from '../search/search.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
    imports: [
        FiltersComponent,
        SearchComponent
    ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
