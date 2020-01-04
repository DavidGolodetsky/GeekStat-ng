import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GamesTableDataSource } from './games-table-datasource';
import { Match } from '../../models/game.model'

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.scss']
})
export class GamesTableComponent implements AfterViewInit, OnInit {
  @Input() public gameId: number;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<Match>;
  dataSource: GamesTableDataSource;
  isMatches$: boolean;

  constructor() {

  }

  displayedColumns = ['position', 'david', 'bunya', 'date'];


  ngOnInit() {
    this.dataSource = new GamesTableDataSource(this.gameId);
    this.dataSource.game.matches ? this.isMatches$ = true : '';
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
