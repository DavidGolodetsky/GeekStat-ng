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
    lyuba: boolean;
    date: string;
}

export const ALL_MATCHES: MatchesTables[] = [
    {
        gameId: 173346,
        matches: [
            { david: false, lyuba: true, date: '10/01/2020' },
            { david: false, lyuba: true, date: '10/01/2020' },
            { david: true, lyuba: false, date: '10/01/2020' },
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
        gameId: 2083,
        matches: [
        ]
    },
    {
        gameId: 2655,
        matches: [
            { david: false, lyuba: true, date: '04/01/2020' },
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
            { david: false, lyuba: true, date: '03/01/2020' },
            { david: true, lyuba: false, date: '03/01/2020' },
            { david: true, lyuba: false, date: '04/01/2020' },
            { david: false, lyuba: true, date: '04/01/2020' },
            { david: false, lyuba: true, date: '05/01/2020' },
            { david: true, lyuba: false, date: '05/01/2020' },
            { david: false, lyuba: true, date: '06/01/2020' },
            { david: false, lyuba: true, date: '06/01/2020' },
            { david: false, lyuba: true, date: '07/01/2020' },
            { david: false, lyuba: true, date: '07/01/2020' },
            { david: true, lyuba: false, date: '07/01/2020' },
            { david: true, lyuba: false, date: '07/01/2020' },
            { david: true, lyuba: false, date: '07/01/2020' },
            { david: false, lyuba: true, date: '09/01/2020' },
            { david: false, lyuba: true, date: '09/01/2020' },
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