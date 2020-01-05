import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Game } from '../../models/game.model';
import { MatDialog } from '@angular/material/dialog';
import { AddMatchComponent } from '../add-match/add-match.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() game: Game;

  name: string;

  constructor(private location: Location, public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddMatchComponent, {
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
