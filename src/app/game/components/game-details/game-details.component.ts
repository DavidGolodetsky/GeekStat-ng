import { GameService } from '../../services/game.service'
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from '../../models/game.model';
import { NavbarService } from 'src/app/components/nav-bar/services/navbar.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit, OnDestroy {

  id: number;
  gameSub$: Subscription;
  game: Game;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private navbarService: NavbarService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.gameSub$ = this.gameService.getGame(this.id)
      .subscribe(game => {
        this.game = game
        this.navbarService.title.next(game.name)
      })
  }

  ngOnDestroy(): void {
    this.gameSub$.unsubscribe();
  }

}
