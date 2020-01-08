import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Game, MatchesTable } from '../models/game.model';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private BGG_URL = 'http://bgg-json.azurewebsites.net/';
  private LOCAL_URL = 'http://localhost:3000/';

  // TODO: recieve from user
  nickname: string = 'davidgol'

  gameMatches: Observable<any[]>

  gameId: number;

  constructor(private http: HttpClient) {
  }

  // TODO: backup it to db.json in case if api fall
  getGames() {
    const path = `${this.BGG_URL}/collection/${this.nickname}`
    return this.http.get<Game[]>(path).pipe(map(games => games.filter(game => game.owned)))
  }

  getGame(id: number) {
    const path = `${this.BGG_URL}/thing/${id}`
    return this.http.get<Game>(path)
  }

  getMatches(id: number) {
    const path = `${this.LOCAL_URL}/matches/${id}`
    return this.http.get<MatchesTable>(path)
  }

}
