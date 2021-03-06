import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Game } from '../../models/game.model';
import { MatDialog } from '@angular/material/dialog';
import { AddTeamComponent } from '../add-team/add-team.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  @Input() game: Game;

  constructor(private location: Location, public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(AddTeamComponent, {
      minWidth: '450px',
      data: { gameId: this.game.gameId }
    });
  }

  goBack(): void {
    this.location.back();
  }

}
