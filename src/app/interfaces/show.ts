import {Genre} from './genre';

export interface Show {
    itemType: 'show';
    showType: 'movie' | 'series';
    id: string;
    imdbId: string;
    tmdbId: string;
    title: string;
    overview: string;
    releaseYear: number;
    firstAirYear: number;
    lastAirYear: number;
    originalTitle: string;
    genres: Genre[];
    directors: string[];
    creators: string[];
    cast: string[];
    rating: number;
    minimum: 0;
    maximum: 100;
    seasonCount: number;
    episodeCount: number;
    imageSet: {
        verticalPoster: {
            w240: string,
            w360: string,
            w480: string,
            w600: string,
            w720: string,
        },
        horizontalPoster: {
            w360: string,
            w480: string,
            w720: string,
            w1080: string,
            w1440: string,
        },
        verticalBackdrop: {
            w240: string,
            w360: string,
            w480: string,
            w600: string,
            w720: string,
        },
        horizontalBackdrop: {
            w360: string,
            w480: string,
            w720: string,
            w1080: string,
            w1440: string,
        },
    };
    streamingOptions: streamingOption[];
    seasons: season[];
}
