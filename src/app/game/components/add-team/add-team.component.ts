import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface Player {
  value: number;
  viewValue: number;
}

export interface DialogData {
  gameId: number;
}

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent {

  teamForm = new FormGroup({
    NumbOfPlayers: new FormControl('2', [Validators.required]),
    player_1: new FormControl('', [Validators.required]),
    player_2: new FormControl('', [Validators.required])
  })

  constructor(
    public dialogRef: MatDialogRef<AddTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public db: AngularFireDatabase) { }



  playersNumber: Player[] = [
    { value: 2, viewValue: 2 },
    { value: 3, viewValue: 3 },
    { value: 4, viewValue: 4 },
    { value: 5, viewValue: 5 },
    { value: 6, viewValue: 6 },
    { value: 7, viewValue: 7 },
    { value: 8, viewValue: 8 },
  ];

  players;



  onCancel(): void {
    this.dialogRef.close();
  }

  addTeam() {
    console.log(this.teamForm.value)
  }

  onPlayersSelected(e) {
    this.cookPlayers(e)
    this.createFormGroup()
  }

  cookPlayers(e) {
    this.players = [];
    const playersNum = e.value.value
    if (playersNum) {
      for (let i = 0; i < +playersNum; i++) {
        this.players.push(i)
      }
    }
  }


  createFormGroup() {
    if (this.players.length === 2) {
      this.teamForm = new FormGroup({
        NumbOfPlayers: new FormControl('2', [Validators.required]),
        player_1: new FormControl('', [Validators.required]),
        player_2: new FormControl('', [Validators.required])
      })
    } else if (this.players.length === 3) {
      this.teamForm = new FormGroup({
        NumbOfPlayers: new FormControl('3', [Validators.required]),
        player_1: new FormControl('', [Validators.required]),
        player_2: new FormControl('', [Validators.required]),
        player_3: new FormControl('', [Validators.required])
      })
    }
  }



}
