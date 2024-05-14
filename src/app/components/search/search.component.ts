import {Component, inject} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FilterService} from '../../services/filter.service';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [
        MatFormFieldModule, MatInputModule, MatSelectModule
    ],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss'
})
export class SearchComponent {
    private filterService: FilterService = inject(FilterService);
    private timeoutId: number = 0;

    search(val: string): void {
        clearTimeout(this.timeoutId);

        const setTitle = () => this.filterService.title = val;

        this.timeoutId = setTimeout(
            () => {
                console.log(val);
                setTitle();
            }, 300
        );
    }
}
