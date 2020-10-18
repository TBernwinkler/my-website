import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogLevel, Video} from '@app/models';
import {saveAs} from 'file-saver';
import {faClipboard, faDownload, faUpload} from '@fortawesome/free-solid-svg-icons';
import {DialogService, VideoManagerService} from '@app/services';
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

  constructor(private dialogService: DialogService, private videoManagerService: VideoManagerService) {
  }

  ngOnInit() {
    this.genres = this.videoManagerService.getGenres();
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

  /**
   * This method runs through various input requirement checkpoints and shows an error dialog as soon as one of the checks fails
   * - If neither an importName nor a selected genre is handed over, it is not possible to run an import
   * -- importName: Create new entry in the list of available genres
   * -- selectedGenre: A genre has been selected via select box. The video list of the selected genre will be overridden with the videos
   *    provided in the JSON formatted string of the textarea field
   * - If there is not text to import, an error is shown
   * - If the text is not in a valid JSON format, an error is shown
   * - If the JSON text is not a valid JSON array or does not contain any elements, an error is shown
   * - If all checkpoints pass, the list of available genres is updated
   * - If the updated list is the one, that is currently active, it is refreshed on the page
   */
  importTracks(): void {
    let showError = false;
    if (!this.importName) {
      if (this.selectedGenre?.length > 0) {
        this.importName = this.selectedGenre;
      } else {
        this.displayImportError('importExport.tab3.import.missingCategoryName');
        showError = true;
      }
    }
    if (!showError && this.importString) {
      try {
        const userInput = JSON.parse(this.importString);
        if (Object.keys(userInput).length > 0) {
          const userMusicSuggestions = userInput as Array<Video>;
          if (userMusicSuggestions instanceof Array && userMusicSuggestions.length > 0) {
            this.videoManagerService.addGenre(this.importName, userMusicSuggestions, this.selectedGenre?.length > 0)
            this.genres = this.videoManagerService.getGenres();
            this.musicSuggestions = userMusicSuggestions;
            this.tracksImported.emit(this.musicSuggestions);
          } else {
            this.displayImportError('importExport.tab3.import.emptyImportList');
          }
        } else {
          this.displayImportError('importExport.tab3.import.emptyImportList');
        }
      } catch (e) {
        this.displayImportError('importExport.tab3.import.invalidFormat');
        return;
      }
    } else {
      this.displayImportError('importExport.tab3.import.missingImportContent');
    }
  }

  /**
   * Opens a dialog with the component defined headline, red ERROR text and the given message as content text
   * @param dialogMessage The given message, that is displayed in the body of the dialog
   * @private
   */
  private displayImportError(dialogMessage: string): void {
    this.dialogService.openDialog(this.importErrorDialogHeadline, dialogMessage, DialogLevel.Error);
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
      this.musicSuggestions = this.videoManagerService.changeActiveGenre(genre);
      this.tracksImported.emit(this.musicSuggestions);
    }
  }

}
