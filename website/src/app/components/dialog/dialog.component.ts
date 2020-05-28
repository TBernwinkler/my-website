import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../../models/dialog-data';
import {DialogLevel} from '../../models/dialog-level';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  levelStyling: string;
  styleInfo = 'dialog info';
  styleWarn = 'dialog warning';
  styleError = 'dialog error';

  ngOnInit() {
    switch (this.data.level) {
      case DialogLevel.Info:
        this.levelStyling = this.styleInfo;
        break;
      case DialogLevel.Warning:
        this.levelStyling = this.styleWarn;
        break;
      case DialogLevel.Error:
        this.levelStyling = this.styleError;
        break;
      default:
        this.levelStyling = this.styleError;
        break;
    }
  }

}
