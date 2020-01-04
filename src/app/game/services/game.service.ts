import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private ROOT_URL = 'http://bgg-json.azurewebsites.net/'

  // TODO: recieve from user
  nickname: string = 'davidgol'

  gameId: number;

  constructor(private http: HttpClient) { }

  getGames() {
    const path = `${this.ROOT_URL}/collection/${this.nickname}`
    return this.http.get<Game[]>(path).pipe(map(games => games.filter(game => game.owned)))
  }

  getGame(id: number) {
    const path = `${this.ROOT_URL}/thing/${id}`
    return this.http.get<Game>(path)
  }
}
