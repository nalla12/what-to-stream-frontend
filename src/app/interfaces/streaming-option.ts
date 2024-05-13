interface ImageSet {
    lightThemeImage: string;
    darkThemeImage: string;
    whiteImage: string;
}

interface Service {
    id: string;
    name: string;
    homePage: string;
    themeColorCode: string;
    imageSet: ImageSet;
}

interface Audios {
    language: string;
    region: string;
}

interface Locale {
    language: string;
    region: string;
}

interface Subtitle {
    closedCaptions: boolean;
    locale: Locale;
}

export interface StreamingOption {
    service: Service;
    type: string;
    link: string;
    videoLink: string;
    quality: string;
    audios: Audios[];
    subtitles: Subtitle[];
    expiresSoon: boolean;
    expiresOn: number;
    availableSince: number
}
