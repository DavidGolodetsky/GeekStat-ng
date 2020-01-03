import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { games } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames() {
    return of(games);
  }
}
