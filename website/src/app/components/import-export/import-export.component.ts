import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';
import {DialogLevel, Video} from '../../models';
import {saveAs} from 'file-saver';
import { faClipboard, faUpload } from '@fortawesome/free-solid-svg-icons';
import {DialogService} from '../../services/dialog/dialog.service';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.scss']
})
export class ImportExportComponent implements OnInit { // todo: trigger updateTrackExport on old method calls

  private importErrorDialogHeadline = 'Import Error'; // translate
  @Input() musicSuggestions: Array<Video>;
  @Output() tracksImported = new EventEmitter();

  faClipboard = faClipboard;
  faUpload = faUpload;

  highlightFirstTab = true;
  exportPreview = false;
  exportString = '';
  importString = '';

  constructor(private dialogService: DialogService) {
  }

  ngOnInit() {
  }

  handleTabChange(event: MatTabChangeEvent) {
    this.highlightFirstTab = event.index === 0;
    console.log(event);
  }

  copyToClipboard(inputElement) {
    console.log(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  updateTrackExport() {
    this.exportString = JSON.stringify(this.musicSuggestions, null, 2);
  }

  exportTracks() {
    saveAs(new Blob([this.exportString], {type: 'application/json'}), 'TrackExport.json');
  }

  importTracks() {
    if (!this.importString) {
      // todo: translate error messages
      const dialogMessage = 'Empty input string! Please enter your tracks prior to clicking the import button';
      this.dialogService.openDialog(this.importErrorDialogHeadline, dialogMessage, DialogLevel.Error);
      return;
    }
    try {
      const userInput = JSON.parse(this.importString);
      if (!userInput) {
        const dialogMessage = 'no json user input';
        this.dialogService.openDialog(this.importErrorDialogHeadline, dialogMessage, DialogLevel.Error);
        return;
      }
      console.log('userInput: ', userInput);
      const userMusicSuggestions = userInput as Array<Video>;
      if (!userMusicSuggestions || userMusicSuggestions.length < 1) {
        const dialogMessage = 'user input not array of videos';
        this.dialogService.openDialog(this.importErrorDialogHeadline, dialogMessage, DialogLevel.Error);
        return;
      }
      this.musicSuggestions = userMusicSuggestions;
      this.tracksImported.emit(this.musicSuggestions);
    } catch (e) {
      const dialogMessage = 'Text to import is not in JSON format! Only a correctly formatted string can be imported.';
      this.dialogService.openDialog(this.importErrorDialogHeadline, dialogMessage, DialogLevel.Error);
      return;
    }
  }

}
