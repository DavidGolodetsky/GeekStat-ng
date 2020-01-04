import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Game } from '../../models/game.model';
import { StarRealmsData } from '../../models/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() game: Game;

  displayedColumns = ['position', 'david', 'bunya', 'date'];
  dataSource = StarRealmsData;


  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
