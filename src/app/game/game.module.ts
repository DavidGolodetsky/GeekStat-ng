import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameRoutingModule } from './game.routing.module';
import { MaterialModule } from '../material';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameComponent } from './components/game/game.component';
import { GamesTableComponent } from './components/games-table/games-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [GameListComponent, GameDetailsComponent, GameComponent, GamesTableComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class GameModule { }
