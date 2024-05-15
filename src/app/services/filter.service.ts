import {Injectable, signal, WritableSignal} from '@angular/core';
import {Show} from '../interfaces/show';

@Injectable({
    providedIn: 'root'
})
export class FilterService {
    private _shows: Show[] = [];
    private _filteredList: WritableSignal<Show[]> = signal<Show[]>([]);
    private _title: WritableSignal<string> = signal<string>('');
    // _country: string;
    // _showType: string;
    // _genre: string[];
    // _imdbScore: number;

    set shows(shows: Show[]) {
        this._shows = shows;
        this.filteredList = shows;
    }

    get filteredList(): WritableSignal<Show[]> {
        return this._filteredList;
    }

    set filteredList(list: Show[]) {
        this._filteredList.set(list);
    }

    get title(): WritableSignal<string> {
        return this._title;
    }

    set title(value: string) {
        const filteredList = this._shows.filter(show => {
            return show.title.toLowerCase().includes(value.toLowerCase());
        });

        this._filteredList.set(filteredList);
        this._title.set(value);
    }
}
