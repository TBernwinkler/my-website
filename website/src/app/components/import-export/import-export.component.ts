import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogLevel, Video} from '../../models';
import {saveAs} from 'file-saver';
import {faClipboard, faDownload, faUpload} from '@fortawesome/free-solid-svg-icons';
import {DialogService} from '../../services/dialog/dialog.service';
import {VideoProvider} from '../../models/video-provider';
import {MatTabChangeEvent} from '@angular/material/tabs';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.scss']
})
export class ImportExportComponent implements OnInit {

  private importErrorDialogHeadline = 'Import Error'; // translate
  @Input() musicSuggestions: Array<Video>;
  @Output() tracksImported = new EventEmitter();

  faClipboard = faClipboard;
  faUpload = faUpload;
  faDownload = faDownload;

  highlightFirstTab = true;
  exportPreview = false;
  exportString = '';
  importName = '';
  importString = '';
  genres: Array<string> = [];

  constructor(private dialogService: DialogService) {
  }

  ngOnInit() {
    this.genres = VideoProvider.getGenres();
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

  updatePreviewSelection(boxChecked) {
    this.exportPreview = boxChecked;
    if (this.exportPreview) {
      this.updateTrackExport();
    }
  }

  updateTrackExport() {
    this.exportString = JSON.stringify(this.musicSuggestions, null, 2);
  }

  exportTracks() {
    saveAs(new Blob([this.exportString], {type: 'application/json'}), 'TrackExport.json');
  }

  changeTrackList(event: MatSelectChange) {
    const genre = event.source.value;
    if (genre) {
      this.musicSuggestions = VideoProvider.provideGenreTracks(genre);
      this.tracksImported.emit(this.musicSuggestions);
    }
  }

  importTracks() {
    if (!this.importName) {
      // todo: i18n
      const dialogMessage = 'Missing input category name! Please enter a name for the genre/category you are about to import';
      this.dialogService.openDialog(this.importErrorDialogHeadline, dialogMessage, DialogLevel.Error);
      return;
    }
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
