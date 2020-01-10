import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Match } from '../../models/game.model'
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.scss']
})
export class GamesTableComponent {
  @Input() public gameId: number;

  games$

  constructor(public db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.games$ = this.db.list(`/${this.gameId}`).valueChanges()
  }

}
