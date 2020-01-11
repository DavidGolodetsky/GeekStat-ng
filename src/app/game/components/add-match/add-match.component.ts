import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Match } from '../../models/game.model';
import { AngularFireDatabase } from '@angular/fire/database';

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
  date: Date = new Date()

  constructor(
    public dialogRef: MatDialogRef<AddMatchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public db: AngularFireDatabase) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  addMatch() {
    this.db.list(`/${this.data.gameId}`).push(this.cookMatch())
  }

  cookMatch(): Match {
    return {
      david: this.winner === 'david' ? true : false,
      lyuba: this.winner === 'lyuba' ? true : false,
      date: this.date.toLocaleDateString()
    }
  }

}
