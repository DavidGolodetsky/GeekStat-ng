export interface Game {
    gameId: number;
    name: string;
    image: string;
    bggRating: number;
    yearPublished: number;
    description: string;
    isExpansion: boolean;
    owned: boolean;
}


export interface GamesTableItem {
    david: boolean;
    position: number;
    bunya: boolean;
    date: string;
}

export const STAR_REALMS: GamesTableItem[] = [
    { position: 1, david: false, bunya: true, date: '03.01.20' },
    { position: 2, david: true, bunya: false, date: '03.01.20' },
];