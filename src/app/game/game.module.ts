import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { GameListComponent } from './components/game-list/game-list.component';
import { GameRoutingModule } from './game.routing.module';
import { MaterialModule } from '../material';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameComponent } from './components/game/game.component';
import { GamesTableComponent } from './components/games-table/games-table.component';
import { AddMatchComponent } from './components/add-match/add-match.component';



@NgModule({
  declarations: [GameListComponent, GameDetailsComponent, GameComponent, GamesTableComponent, AddMatchComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  entryComponents: [
    AddMatchComponent
  ],
})
export class GameModule { }
