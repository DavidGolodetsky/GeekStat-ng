import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GamesTableDataSource } from './games-table-datasource';
import { Match, MatchesTable } from '../../models/game.model'
import { GameService } from '../../services/game.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  constructor(private gameService: GameService) { }

  displayedColumns = ['david', 'lyuba', 'date'];

  // arr;


  ngOnInit() {
    const matches: Observable<MatchesTable> = this.gameService.getMatches(this.gameId);
    const filtered = matches.pipe(
      map(matches => matches.matches)
    )
    // TODO: figure out how to pass observable to a table or covert it to array
    // filtered.subscribe((response: any) => {      
    //   this.arr.push(...response.data)
    // })
    this.dataSource = new GamesTableDataSource(this.gameId);
  }



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
