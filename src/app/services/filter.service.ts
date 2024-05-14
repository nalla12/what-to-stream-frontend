import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FilterService {
    private _title: WritableSignal<string> = signal<string>('');
    // _country: string;
    // _showType: string;
    // _genre: string[];
    // _imdbScore: number;

    constructor() {
    }

    get title(): WritableSignal<string> {
        return this._title;
    }

    set title(value: string) {
        this._title.set(value.toLowerCase());
    }
}
