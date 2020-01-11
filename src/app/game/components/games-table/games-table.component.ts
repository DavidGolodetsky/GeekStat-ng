import { Component, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatDialog } from '@angular/material/dialog';
import { AddMatchComponent } from '../add-match/add-match.component';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.scss']
})
export class GamesTableComponent {
  @Input() public gameId: number;

  games$

  constructor(public db: AngularFireDatabase, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.games$ = this.db.list(`/games/${this.gameId}`).valueChanges()
  }

  openDialog(): void {
    this.dialog.open(AddMatchComponent, {
      minWidth: '450px',
      data: { gameId: this.gameId }
    });
  }
}
