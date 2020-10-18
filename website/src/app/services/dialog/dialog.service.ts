import { Injectable } from '@angular/core';
import {DialogLevel} from '@app/models';
import {DialogComponent} from '@app/components/sub-components';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  public openDialog(dialogHeadline: string, dialogMessage: string, level: DialogLevel) {
    this.dialog.open(DialogComponent, {
      width: '25%',
      data: {headline: dialogHeadline, message: dialogMessage, level}
    });
  }
}
