import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-search',
  standalone: true,
    imports: [
        MatFormFieldModule, MatInputModule, MatSelectModule
    ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
    genres: string[] = ['horror', 'thriller', 'drama'];
}