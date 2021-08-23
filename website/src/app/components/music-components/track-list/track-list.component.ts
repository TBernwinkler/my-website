import {Component, EventEmitter, Output} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Video, VideoProvider} from '@app/models';
import {faArrowsAlt, faPlayCircle, faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import {AppState} from '@app/app.state';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as VideoActions from '@app/actions/video.action'

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent {
  musicSuggestions: Array<Video> = [];
  // will directly interact with redux
  @Output() changeSelection: EventEmitter<number> = new EventEmitter();
  // should be done in a pipe check
  classActive = 'active';
  videos: Observable<Video[]>;

  faVolumeUp = faVolumeUp;
  faPlayCircle = faPlayCircle;
  faArrowsAlt = faArrowsAlt;

  constructor(private store: Store<AppState>) {
    this.videos = store.select('videos');
    this.refresh();
  }

  private refresh() {
    this.videos.subscribe(videoList => {
      this.musicSuggestions = [...videoList];
    }).unsubscribe();
  }

  /**
   * Updates the video list according to the repositioning of displayed events
   * after dragging and dropping
   * @param event The event that provides information about moving an element.
   */
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.musicSuggestions, event.previousIndex, event.currentIndex);
    const newList = [...this.musicSuggestions];
    // Need to clear the list to update order. Any other way JSON content would still be the same
    this.store.dispatch(new VideoActions.ClearVideos());
    this.store.dispatch(new VideoActions.AddVideos(newList));
    this.refresh();
  }


  /**
   * Triggers a method with the same name in the MusicComponent to update
   * - content of the iframe
   * - highlighting of the active video
   * - adjust video playback if Play All is enabled
   * @param index The position of the video to set active within musicSuggestions
   */
  changeVideoByClick(index: number) {
    this.changeSelection.emit(index);
  }


  /**
   * The currently active track in the track list is displayed differently.
   * Here, the active element within the track list is updated to a new element.
   * @param highlightIndex The index of the new entry within musicSuggestions to be highlighted
   */
  updateTrackHighlighting(highlightIndex: number) {
    if (highlightIndex >= this.musicSuggestions.length) {
      highlightIndex = 0;
    }
    this.resetHighlighting();
    const selection = VideoProvider.getNthTrackElement(highlightIndex);
    if (selection) {
      selection.classList.add(this.classActive);
    }
  }


  /**
   * If a track list entry on a certain position contains the 'active' class, the element
   * is considered selected. This method is called in the HTML to check what icon needs to be displayed.
   * @param index Index of the element within the track list to check for the active class
   */
  isSelected(index: number): boolean {
    const selection = VideoProvider.getNthTrackElement(index);
    return !selection || index > this.musicSuggestions.length ? index === 0 : selection.classList.contains(this.classActive);
  }


  /**
   * Removes the 'active' class from all entries in the track list.
   * Entries are div elements that have the 'entry' class attached to it.
   * @private
   */
  private resetHighlighting() {
    const entries = document.querySelectorAll('.entry');
    entries.forEach(entry => {
      entry.classList.remove(this.classActive);
    });
  }
}
