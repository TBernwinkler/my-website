import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogLevel, Video, VideoProvider} from '@app/models';
import {saveAs} from 'file-saver';
import {faClipboard, faDownload, faUpload} from '@fortawesome/free-solid-svg-icons';
import {DialogService} from '@app/services/dialog/dialog.service';
import {MatTabChangeEvent} from '@angular/material/tabs';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.scss']
})
export class ImportExportComponent implements OnInit {

  private importErrorDialogHeadline = 'importExport.tab3.import.importErrorHeadline';
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

  importOption1 = 'importExport.tab3.importSelect1Option1';
  importOption2 = 'importExport.tab3.importSelect1Option2';
  importOptions: Array<string>;
  selectedImportOption = '';
  selectedGenre = '';
  missingRequirement = true;

  constructor(private dialogService: DialogService) {
  }

  ngOnInit() {
    this.genres = VideoProvider.getGenres();
    this.importOptions = [
      this.importOption1,
      this.importOption2
    ];
  }

  handleTabChange(event: MatTabChangeEvent) {
    this.highlightFirstTab = event.index === 0;
  }

  /* IMPORT */
  checkImportSelection(): void {
    const requirementOption1 = this.selectedImportOption === this.importOption1 && this.selectedGenre !== '';
    const requirementOption2 = this.selectedImportOption === this.importOption2 && this.importName !== '';
    this.missingRequirement = !requirementOption1 && !requirementOption2;
  }

  importTracks(): void {
    if (!this.importName && this.selectedGenre) {
      this.importName = this.selectedGenre;
    }

    if (!this.importName && !this.selectedGenre) {
      const dialogMessage = 'importExport.tab3.import.missingCategoryName';
      this.dialogService.openDialog(this.importErrorDialogHeadline, dialogMessage, DialogLevel.Error);
      return;
    }
    if (!this.importString) {
      const dialogMessage = 'importExport.tab3.import.missingImportContent';
      this.dialogService.openDialog(this.importErrorDialogHeadline, dialogMessage, DialogLevel.Error);
      return;
    }
    try {
      const userInput = JSON.parse(this.importString);
      if (!Object.keys(userInput).length) {
        const dialogMessage = 'importExport.tab3.import.emptyImportList';
        this.dialogService.openDialog(this.importErrorDialogHeadline, dialogMessage, DialogLevel.Error);
        return;
      }
      const userMusicSuggestions = userInput as Array<Video>;
      if (!(userMusicSuggestions instanceof Array) || userMusicSuggestions.length < 1) {
        const dialogMessage = 'importExport.tab3.import.emptyImportList';
        this.dialogService.openDialog(this.importErrorDialogHeadline, dialogMessage, DialogLevel.Error);
        return;
      }
      this.musicSuggestions = userMusicSuggestions;
      this.tracksImported.emit(this.musicSuggestions);
    } catch (e) {
      const dialogMessage = 'importExport.tab3.import.invalidFormat';
      this.dialogService.openDialog(this.importErrorDialogHeadline, dialogMessage, DialogLevel.Error);
      return;
    }
  }


  /* EXPORT */

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

}
