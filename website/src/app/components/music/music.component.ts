import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {
  faArrowsAlt,
  faBook,
  faMinus,
  faMusic,
  faPauseCircle,
  faPlayCircle,
  faRandom,
  faStepBackward,
  faStepForward,
  faVolumeUp
} from '@fortawesome/free-solid-svg-icons';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {VideoManagerService} from '@app/services';
import {ImportExportComponent} from '@app/components/sub-components/music';
import {NameIconPair, Renditions, Video, VideoProvider} from '@app/models';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MusicComponent implements OnInit, OnDestroy {

  @ViewChild('videoPlayback', {static: false}) videoPlayback: ElementRef<HTMLElement>;
  @ViewChild('importExportComponent', {static: false}) importExport: ImportExportComponent;
  baseUrl = 'https://www.youtube-nocookie.com/embed/';
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

  musicSuggestions: Array<Video>;
  // ICONS
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
  // hero component
  headline: Array<NameIconPair> = [
    {name: 'music.hero.headlineA', icon: null},
    {name: null, icon: this.faMusic},
    {name: 'music.hero.headlineB', icon: null}
  ];
  description: string;
  images: Renditions = {
    mobile: 'music/audio-576.jpg',
    tablet: 'music/audio-768.jpg',
    tabletLandscape: 'music/audio-992.jpg',
    laptop: 'music/audio-1200.jpg',
    desktop: 'music/audio-1900.jpg',
    extraLarge: 'music/audio.jpg'
  };
  imageSource = 'https://www.pexels.com/@snapwire';
  private subscriptions: Array<Subscription> = [];

  constructor(private route: ActivatedRoute, private videoManagerService: VideoManagerService) { }

  /**
   * Initialization of the component
   * - Makes sure to receive all updates of the video manager service to provide up to date videos
   * - Sets the initial video list
   */
  ngOnInit() {
    // automatically load the video list suggestions whenever it is changed
    this.subscriptions.push(this.videoManagerService.getListChangeEmitter()
      .subscribe(suggestions => this.updateMusicSuggestions(suggestions)));
    // automatically load the right video list based on a URL query parameter
    this.subscriptions.push(this.route.queryParams.subscribe(params => {
      const genreIds: Array<string> = ['rock', 'mainstream', 'techno', 'albums'];
      const genre = params?.genre;
      if (genre && genreIds.indexOf(genre) >= 0) {
        const genres = this.videoManagerService.getGenres();
        this.videoManagerService.changeActiveGenre(genres[genreIds.indexOf(genre)]);
      }
    }));
    // Initial assignment
    this.musicSuggestions = this.videoManagerService.getActiveVideoList();
    this.activeVideo = this.musicSuggestions[0];

    // this can be removed in future once the rework is finished
    this.updateTrackExport();
  }

  /**
   * Destructor takes care of all subscriptions to avoid memory leaks
   */
  ngOnDestroy() {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

  // GENERAL PART
  /**
   * Loads the current video list every time, it has been changed in the video manager service
   * @param suggestions The updated list of videos to display
   */
  public updateMusicSuggestions(suggestions: Array<Video>): void {
    this.musicSuggestions = suggestions;
  }

  isMobile(): boolean {
    return window.innerWidth < this.switchWidth;
  }

  // #################################
  // ############ DESKTOP ############
  // #################################

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
    if (this.counterPaused) {
      this.counterPaused = false;
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
    if (highlightIndex >= this.musicSuggestions.length) {
      this.updateTrackHighlighting(0);
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
        if (this.activeIndex < this.musicSuggestions.length) {
          this.remainingTime = this.musicSuggestions[this.activeIndex].duration;
        } else {
          this.playAll = false;
        }
      } else {
        console.log('damn it...');
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

  updateOnImport(musicSuggestions) {
    // todo: rework this according to documentation
    // this.musicSuggestions = musicSuggestions;
    // // UPDATE LIST OF SONGS FOR POTENTIAL REMOVAL
    // this.trackList.splice(0, this.trackList.length);
    // this.musicSuggestions.forEach(entry => {
    //   this.trackList.push({name: entry.artist + ' - ' + entry.track, value: entry.youtube});
    // });
    // // DISABLE PLAY ALL AND RESET HIGHLIGHTING
    // if (!this.counterPaused) {
    //   this.playPauseVideoCounter();
    // }
    // this.playAll = false;
    // this.autoplay = false;
    // this.changeActiveVideo(0, null);
  }

  isSelected(index: number): boolean {
    const selection = VideoProvider.getNthTrackElement(index);
    return !selection || index < 1 ? index === 0 : selection.classList.contains(this.classActive);
  }


  private updateTrackExport() {
    if (this.importExport) {
      this.importExport.updateTrackExport();
    }
  }

}
