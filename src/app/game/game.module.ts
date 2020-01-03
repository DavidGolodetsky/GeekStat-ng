import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameRoutingModule } from './game.routing.module';



@NgModule({
  declarations: [GameListComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
