import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {
  faArrowsAlt, faBook,
  faCaretDown,
  faCaretUp,
  faMinus,
  faMusic,
  faPauseCircle,
  faPlayCircle,
  faRandom,
  faStepBackward,
  faStepForward,
  faVolumeUp
} from '@fortawesome/free-solid-svg-icons';
import {DialogLevel, Video} from '../../models';
import {MatSelectChange, MatSlideToggleChange} from '@angular/material';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {DialogService} from '../../services/dialog/dialog.service';
import {ImportExportComponent} from '../import-export/import-export.component';
import {VideoProvider} from '../../models/video-provider';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MusicComponent implements OnInit {

  private addVideoErrorDialogHeadline = 'Could not add video'; // translate
  @ViewChild('videoPlayback', {static: false}) videoPlayback: ElementRef<HTMLElement>;
  @ViewChild('importExportComponent', {static: false}) importExport: ImportExportComponent;
  baseUrl = 'https://www.youtube-nocookie.com/embed/';
  regularYouTubeBaseUrl = 'https://www.youtube.com/watch?v=';
  youTubeShareBaseUrl = 'https://youtu.be/';
  classActive = 'active';
  switchWidth = 768;
  activeVideo: Video;
  autoplay = false;
  playAll = false;
  counterPaused = false;
  remainingTime = 0;
  interval;
  previous = 0;
  activeIndex = -1;
  inputVideoId = '';
  inputInterpret = '';
  inputTrack = '';
  inputDurationMin = 0;
  inputDurationSec = 0;
  musicSuggestions: Array<Video> = VideoProvider.provideTracks();
  trackList: Array<{name: string, value: string}> = [];
  selectedTracks: Array<string> = [];
  // ICONS
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  faPlayCircle = faPlayCircle;
  faPauseCircle = faPauseCircle;
  faVolumeUp = faVolumeUp;
  faMinus = faMinus;
  faMusic = faMusic;
  faArrowsAlt = faArrowsAlt;
  faStepForward = faStepForward;
  faStepBackward = faStepBackward;
  faRandom = faRandom;
  faBook = faBook;

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.activeVideo = this.musicSuggestions[0];

    this.musicSuggestions.forEach(entry => {
      this.trackList.push({name: entry.artist + ' - ' + entry.track, value: entry.youtube});
    });
    this.updateTrackExport();
  }

  // GENERAL PART
  isMobile(): boolean {
    return window.innerWidth < this.switchWidth;
  }

  // MOBILE PART
  toggleEntry(index: number): void {
    const headerElement = document.querySelectorAll('.accordion-header')[index];
    const contentElement = document.querySelector('li:nth-child(' + (index + 1) + ') .accordion-content');
    headerElement.classList.toggle(this.classActive);
    contentElement.classList.toggle(this.classActive);
  }

  isActive(index: number): boolean {
    const contentElement = document.querySelector('li:nth-child(' + (index + 1) + ') .accordion-content');
    return contentElement.classList.contains(this.classActive);
  }

  // #################################
  // ############ DESKTOP ############
  // #################################
  isSelected(index: number): boolean {
    const selection = VideoProvider.getNthTrackElement(index);
    return !selection ? index === 0 : selection.classList.contains(this.classActive);
  }

  scrollToElement(el: HTMLElement) {
    el.scrollIntoView();
  }

  handleToggle(toggle: MatSlideToggleChange, id: string) {
    if (id === 'autoplay') {
      if (!this.autoplay) {
        this.playAll = false;
      }
    } else if (this.playAll) {
      this.autoplay = true;
      this.activeIndex = (this.activeIndex >= 0 ? this.activeIndex : 0) - 1;
      this.runAsPlaylist();
    }
    if (!this.playAll) {
      this.updateTrackHighlighting(0);
    }
  }

  changeVideoByClick(index: number, video: HTMLElement) {
    if (this.playAll) {
      this.activeIndex = index - 1;
      this.runAsPlaylist();
    } else {
      this.changeActiveVideo(index, video);
    }
  }

  private runAsPlaylist() {
    this.remainingTime = 0;
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.startCounter();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.musicSuggestions, event.previousIndex, event.currentIndex);
  }

  private changeActiveVideo(index: number, video: HTMLElement) {
    if (index >= 0 && index < this.musicSuggestions.length) {
      this.activeVideo = new Video(
        this.musicSuggestions[index].artist,
        this.musicSuggestions[index].track,
        this.musicSuggestions[index].youtube,
        this.musicSuggestions[index].duration
      );
      if (this.autoplay) {
        this.activeVideo.youtube += (this.activeVideo.youtube.indexOf('?') === -1 ? '?' : '&') + 'autoplay=1&enablejsapi=1';
      }
    }

    this.updateTrackHighlighting(index);
    this.previous = index;
    this.activeIndex = index;

    if (video) {
      video.scrollIntoView();
    } else if (index > 1) {
      const elementToFocus = VideoProvider.getNthTrackElement(index - 2);
      elementToFocus.scrollIntoView();
    }
  }

  private updateTrackHighlighting(highlightIndex: number) {
    const selection = VideoProvider.getNthTrackElement(highlightIndex);
    if (selection && !selection.classList.contains(this.classActive)) {
      selection.classList.add(this.classActive);
    }
    const previousSelection = VideoProvider.getNthTrackElement(this.previous);
    if (selection && previousSelection && selection !== previousSelection && previousSelection.classList.contains(this.classActive)) {
        previousSelection.classList.remove(this.classActive);
    }
  }

  // ON AUTO PLAY ENABLED
  startCounter() {
    this.interval = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else if (this.playAll && this.activeIndex < this.musicSuggestions.length) {
        this.activeIndex++;
        this.changeActiveVideo(this.activeIndex, null);
        this.remainingTime = this.musicSuggestions[this.activeIndex].duration;
      } else {
        console.log('Autoplay timer encountered unexpected behavior.');
      }
    }, 1000);
  }

  playPauseVideoCounter() {
    const iframe = document.querySelector('iframe');
    if (this.counterPaused) {
      // this.activeIndex = this.getIndexForVideo(this.activeVideo, this.musicSuggestions);
      // resume
      iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      this.startCounter();
    } else {
      // pause
      iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      clearInterval(this.interval);
    }
    this.counterPaused = !this.counterPaused;
  }

  playPreviousSong() {
    this.activeIndex -= 2;
    this.remainingTime = 0;
    if (this.counterPaused) {
      this.playPauseVideoCounter();
      this.counterPaused = false;
    }
  }

  playNextSong() {
    this.remainingTime = 0;
    if (this.counterPaused) {
      this.playPauseVideoCounter();
      this.counterPaused = false;
    }
  }

  triggerShuffle() {
    const shuffledSongs = this.musicSuggestions.map(x => Object.assign({}, x));
    for (const video of this.musicSuggestions) {
      // Fisher-Yates shuffle
      let m = shuffledSongs.length;
      let t;
      let i;

      // While there remain elements to shuffle
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = shuffledSongs[m];
        shuffledSongs[m] = shuffledSongs[i];
        shuffledSongs[i] = t;
      }
    }
    this.musicSuggestions = shuffledSongs;
    if (this.playAll) {
      this.activeIndex--;
      this.runAsPlaylist();
    }
  }

  // EDIT MUSIC SUGGESTION LIST
  addNewVideo() {
    if (this.inputVideoId && this.inputInterpret && this.inputTrack && this.inputDurationSec > 0) {
      if (!this.inputDurationMin || this.inputDurationMin <= 0) {
        this.inputDurationMin = 0;
      }
      const duration = 60 * this.inputDurationMin + this.inputDurationSec;
      if (this.inputVideoId.startsWith(this.regularYouTubeBaseUrl)) {
        this.inputVideoId = this.inputVideoId.replace(this.regularYouTubeBaseUrl, '');
      }
      if (this.inputVideoId.startsWith(this.youTubeShareBaseUrl)) {
        this.inputVideoId = this.inputVideoId.replace(this.youTubeShareBaseUrl, '');
        if (this.inputVideoId.indexOf('?t=') !== -1) {
          this.inputVideoId = this.inputVideoId.replace('?t=', '?start=');
        }
      }
      this.musicSuggestions.push({
        artist: this.inputInterpret,
        track: this.inputTrack,
        youtube: this.inputVideoId,
        duration
      });
      this.inputInterpret = '';
      this.inputTrack = '';
      this.inputVideoId = '';
      this.inputDurationSec = 0;
      this.inputDurationMin = 0;
      this.updateTrackExport();
    } else {
      let dialogMessage = '';
      if (!this.inputVideoId) {
        dialogMessage = '- Missing video id\n';
      }
      if (!this.inputInterpret) {
        dialogMessage += '- Missing interpret\n';
      }
      if (!this.inputTrack) {
        dialogMessage += '- Missing track\n';
      }
      if (!this.inputDurationSec) {
        dialogMessage += '- Missing video duration';
      }
      this.dialogService.openDialog(this.addVideoErrorDialogHeadline, dialogMessage, DialogLevel.Error);
    }
  }

  handleDeleteVideoListSelectionChange(event: MatSelectChange) {
    this.selectedTracks = event.source.value;
    if (event.source.selected) {
    }
  }

  handleRemoveVideosFromSuggestions() {
    if (this.selectedTracks.length > 0) {
      // REMOVE VIDEO TO THE LEFT
      this.selectedTracks.forEach(entry => {
        const idx = this.musicSuggestions.indexOf(this.musicSuggestions.find(
          suggestion => suggestion.youtube === entry));
        this.musicSuggestions.splice(idx, 1);
      });

      // REMOVE ITEMS FROM SELECT BOX
      this.selectedTracks.forEach(entry => {
        const idx = this.trackList.indexOf(this.trackList.find(
          track => track.value === entry));
        this.trackList.splice(idx, 1);
      });
      this.updateTrackExport();
    }
    this.selectedTracks = [];
  }

  updateOnImport(musicSuggestions) {
    this.musicSuggestions = musicSuggestions;
  }

  private updateTrackExport() {
    if (this.importExport) {
      this.importExport.updateTrackExport();
    }
  }

}
