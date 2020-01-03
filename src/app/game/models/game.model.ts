// TODO: fetch from here and filter from OWN list http://bgg-json.azurewebsites.net/collection/davidgol

export interface Game {
    gameId: number;
    name: string;
    image: string;
    averageRating: number;
    yearPublished: number;
}

export const games: Game[] = [
    {
        "gameId": 173346,
        "name": "7 Wonders Duel",
        "image": "https://cf.geekdo-images.com/original/img/M6wL1YFgW-PsdtJ328m2QiJf1K8=/0x0/pic3376065.jpg",
        "averageRating": 8.10902,
        "yearPublished": 2015,
    },
    {
        "gameId": 147020,
        "name": "Star Realms",
        "image": "https://cf.geekdo-images.com/original/img/XRgMJVv4YweLlANgVvxeZsQ4lm0=/0x0/pic1903816.jpg",
        "averageRating": 8.10902,
        "yearPublished": 2015,
    },
    {
        "gameId": 2655,
        "name": "Hive",
        "image": "https://cf.geekdo-images.com/original/img/_EUpzmJKbLkOwYMZA_sOmyjGnlI=/0x0/pic791151.jpg",
        "averageRating": 8.10902,
        "yearPublished": 2015,
    }
]


export interface GameData {
    david: boolean;
    position: number;
    bunya: boolean;
    date: string;
}

export const StarRealmsData: GameData[] = [
    { position: 1, david: true, bunya: false, date: '12.12.19' },
    { position: 2, david: true, bunya: false, date: '12.12.19' },
    { position: 3, david: false, bunya: true, date: '12.12.19' },
];