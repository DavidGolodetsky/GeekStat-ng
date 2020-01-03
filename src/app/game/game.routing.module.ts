import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';


const routes: Routes = [
    {
        path: '',
        component: GameListComponent
    },
    {
        path: ':id',
        component: GameDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GameRoutingModule { }
