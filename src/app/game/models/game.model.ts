export interface Game {
    gameId: number;
    name: string;
    image: string;
    bggRating: number;
    yearPublished: number;
    isExpansion: boolean;
    owned: boolean;
}


export interface MatchesTables {
    gameId: number;
    matches: Match[];
}

export interface Match {
    david: boolean;
    position: number;
    bunya: boolean;
    date: string;
}

export const ALL_MATCHES: MatchesTables[] = [
    {
        gameId: 173346,
        matches: [
        ]
    },
    {
        gameId: 171,
        matches: [
        ]
    },
    {
        gameId: 202976,
        matches: [
        ]
    },
    {
        gameId: 166704,
        matches: [
        ]
    },
    {
        gameId: 71021,
        matches: [
        ]
    },
    {
        gameId: 97277,
        matches: [
        ]
    },
    {
        gameId: 2655,
        matches: [
            { position: 1, david: false, bunya: true, date: '04.01.20' },
        ]
    },
    {
        gameId: 1115,
        matches: [
        ]
    },
    {
        gameId: 147020,
        matches: [
            { position: 1, david: false, bunya: true, date: '03.01.20' },
            { position: 2, david: true, bunya: false, date: '03.01.20' },
            { position: 3, david: true, bunya: false, date: '04.01.20' },
            { position: 4, david: false, bunya: true, date: '04.01.20' },
        ]
    },
    {
        gameId: 166702,
        matches: [
        ]
    },
    {
        gameId: 166707,
        matches: [
        ]
    },
    {
        gameId: 158957,
        matches: [
        ]
    },
    {
        gameId: 202247,
        matches: [
        ]
    }
];