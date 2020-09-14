export interface Movie {
    id: number;
    poster_path: string;
    original_title: string;
    title: string;
    overview: string;
    release_date: Date;
}

export interface FullMovie {
    id: number;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    title: string;
    overview: string;
    genres: Genre[];
}

export interface Genre {
    id: number;
    name: string;
}
