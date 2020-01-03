import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameRoutingModule } from './game.routing.module';
import { MaterialModule } from '../material';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameComponent } from './components/game/game.component';



@NgModule({
  declarations: [GameListComponent, GameDetailsComponent, GameComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    MaterialModule
  ]
})
export class GameModule { }
