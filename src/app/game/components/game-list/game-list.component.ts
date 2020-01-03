import { GameService } from '../../services/game.service'
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games$: Observable<Game[]>
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.games$ = this.gameService.getGames()
  }

}