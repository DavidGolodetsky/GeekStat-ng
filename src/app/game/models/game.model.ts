// TODO: fetch from here and filter from OWN list http://bgg-json.azurewebsites.net/collection/davidgol

export interface Game {
    gameId: number;
    name: string;
    image: string;
    rating: number;
}

export const games: Game[] = [
    {
        "gameId": 173346,
        "name": "7 Wonders Duel",
        "image": "https://cf.geekdo-images.com/original/img/M6wL1YFgW-PsdtJ328m2QiJf1K8=/0x0/pic3376065.jpg",
        "rating": 10.0
    },
    {
        "gameId": 147020,
        "name": "Star Realms",
        "image": "https://cf.geekdo-images.com/original/img/XRgMJVv4YweLlANgVvxeZsQ4lm0=/0x0/pic1903816.jpg",
        "rating": 10.0
    },
    {
        "gameId": 2655,
        "name": "Hive",
        "image": "https://cf.geekdo-images.com/original/img/_EUpzmJKbLkOwYMZA_sOmyjGnlI=/0x0/pic791151.jpg",
        "rating": 9.0
    }
]