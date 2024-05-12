import {Component, OnInit} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption} from '@angular/material/autocomplete';
import {MatSelect} from '@angular/material/select';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {GENRES, SHOW_TYPES} from '../../constants';
import {TitleCasePipe} from '@angular/common';
import {MatSlider, MatSliderThumb} from '@angular/material/slider';

@Component({
    selector: 'app-filters',
    standalone: true,
    imports: [
        MatFormField,
        MatLabel,
        MatOption,
        MatSelect,
        MatButtonToggle,
        MatButtonToggleGroup,
        TitleCasePipe,
        MatSlider,
        MatSliderThumb
    ],
    templateUrl: './filters.component.html',
    styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit {
    showType: string[] = SHOW_TYPES;
    genres: string[] = GENRES;
    selectedGenre: string = '';
    selectedShowType: string = '';
    imdbScore = {
        max: 10,
        min: 1,
        showTicks: false,
        step: 1,
        thumbLabel: true,
        value: 7,
    }

    ngOnInit(){
        this.selectedShowType = this.showType[0];
        this.selectedGenre = this.genres[0];
    }

    public onShowTypeChange(val: string) {
        this.selectedShowType = val;
        console.log(val);
    }

    public onGenreChange(val: string) {
        this.selectedGenre = val;
        console.log(val);
    }
}
