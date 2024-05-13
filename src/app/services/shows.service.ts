import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from './message.service';
import {environment} from '../../environments/environment';
import {Show} from '../interfaces/show';

@Injectable({
    providedIn: 'root'
})
export class ShowsService {
    private showsUrl = environment.apiUrl + 'shows';

    constructor(private http: HttpClient, private messageService: MessageService) {
        console.log('shows service');
    }

    /** GET all shows */
    getShows(): Observable<Show[]> {
        console.log('getShows!');
        return this.http.get<Show[]>(this.showsUrl) // load from the mock server
            .pipe(
                tap(_ => this.log('fetched shows')),
                map((response) => response),
                catchError(this.handleError<Show[]>('getShows', []))
            );
    }

    searchShows(term: string): Observable<Show[]> {
        if (!term.trim()) {
            return of([]);
        }
        return this.http.get<Show[]>(`${this.showsUrl}/?name=${term}`).pipe(
            tap(x => x.length
                ? this.log(`found shows matching "${term}"`)
                : this.log(`no shows matching "${term}"`)),
            catchError(this.handleError<Show[]>('searchShows', []))
        );
    }

    private log(message: string) {
        this.messageService.add(`ShowsService: ${message}`);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
