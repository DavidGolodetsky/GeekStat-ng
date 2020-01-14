import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Match } from '../../models/game.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface DialogData {
  gameId: number;
}
@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.scss']
})
export class AddMatchComponent {

  matchForm = new FormGroup({
    winner: new FormControl('', [Validators.required]),
    date: new FormControl(new Date())
  })

  constructor(
    public dialogRef: MatDialogRef<AddMatchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public db: AngularFireDatabase) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  addMatch() {
    if (this.matchForm.valid) {
      this.db.list(`/games/${this.data.gameId}`).push(this.cookMatch())
    }
  }

  cookMatch(): Match {
    console.log(this.matchForm.value)
    return {
      david: this.matchForm.value.winner === 'david' ? true : false,
      lyuba: this.matchForm.value.winner === 'lyuba' ? true : false,
      date: this.matchForm.value.date.toLocaleDateString()
    }
  }

}
