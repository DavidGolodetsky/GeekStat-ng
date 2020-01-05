import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.scss']
})
export class AddMatchComponent implements OnInit {

  name: string;

  constructor(public dialogRef: MatDialogRef<AddMatchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
