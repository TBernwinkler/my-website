import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData, DialogLevel} from '../../models';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  public level: DialogLevel = DialogLevel.Error;

  styleInfo = 'dialog info';
  styleWarn = 'dialog warning';
  styleError = 'dialog error';

  ngOnInit() {
    this.level = this.data.level;
  }

  public get dialogLevel(): typeof DialogLevel {
    return DialogLevel;
  }

}
