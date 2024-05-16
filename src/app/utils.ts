import {Genre} from './interfaces/genre';

export function genresAsString(genres: Genre[]): string {
    return genres.map(genre => genre.name).join(', ');
}
