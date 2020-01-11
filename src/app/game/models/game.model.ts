export interface Game {
    gameId: number;
    name: string;
    image: string;
    bggRating: number;
    yearPublished: number;
    isExpansion: boolean;
    owned: boolean;
}


export interface Match {
    david: boolean;
    lyuba: boolean;
    date: string;
}
