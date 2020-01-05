import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Match, ALL_MATCHES } from '../../models/game.model';

export interface DialogData {
  gameId: number;
}
@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.scss']
})
export class AddMatchComponent {

  winner: string;

  constructor(
    public dialogRef: MatDialogRef<AddMatchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  addMatch() {
    const gameIndex = ALL_MATCHES.findIndex(game => game.gameId === this.data.gameId);
    ALL_MATCHES[gameIndex].matches.push(this.cookMatch())
  }

  cookMatch(): Match {
    return {
      david: this.winner === 'david' ? true : false,
      lyuba: this.winner === 'lyuba' ? true : false,
      date: new Date().toLocaleDateString()
    }
  }

}
