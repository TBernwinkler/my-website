import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {
  faBook,
  faMicrophoneAlt,
  faMusic,
  faPauseCircle,
  faPlayCircle,
  faRandom,
  faStepBackward,
  faStepForward
} from '@fortawesome/free-solid-svg-icons';
import {VideoManagerService} from '@app/services';
import {ImportExportComponent} from '@app/components';
import {NameIconPair, Renditions, Video, VideoProvider} from '@app/models';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {TrackListComponent} from '@app/components/music-components/track-list/track-list.component';
import {Store} from '@ngrx/store';
import {AppState} from '@app/app.state';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MusicComponent implements OnInit, OnDestroy {

  @ViewChild('trackListComponent', {static: false})
  trackList!: TrackListComponent;
  @ViewChild('videoPlayback', {static: false})
  videoPlayback!: ElementRef<HTMLElement>;
  @ViewChild('importExportComponent', {static: false})
  importExport!: ImportExportComponent;
  @ViewChild('contentArea', {static: false})
  contentArea!: ElementRef<HTMLElement>;
  baseUrl = 'https://www.youtube-nocookie.com/embed/';
  switchWidth = 768;
  activeVideo!: Video;
  autoplay = false;
  playAll = false;
  expandVideo = false;
  counterPaused = false;
  remainingTime = 0;
  interval: any;
  activeIndex = -1;

  musicSuggestions: Array<Video> = [];
  videos: Observable<Video[]>;
  // ICONS
  faPlayCircle = faPlayCircle;
  faPauseCircle = faPauseCircle;
  faMicrophoneAlt = faMicrophoneAlt;
  faMusic = faMusic;
  faStepForward = faStepForward;
  faStepBackward = faStepBackward;
  faRandom = faRandom;
  faBook = faBook;
  // faExpand, faCompress to expand and shrink the video area
  // hero component
  headline: Array<NameIconPair> = [
    {name: 'music.hero.headlineA'},
    {name: '', icon: this.faMusic},
    {name: 'music.hero.headlineB'}
  ];
  description: string = '';
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

  constructor(private route: ActivatedRoute, private videoManagerService: VideoManagerService, private store: Store<AppState>) {
    this.videos = store.select('videos');
  }

  /**
   * Initialization of the component
   * - Makes sure to receive all updates of the video manager service to provide up to date videos
   * - Sets the initial video list
   */
  ngOnInit() {
    // automatically load the video list suggestions whenever it is changed
    this.subscriptions.push(this.videoManagerService.getListChangeEmitter()
      .subscribe((suggestions: Video[]) => this.updateMusicSuggestions(suggestions)));
    // automatically load the right video list based on a URL query parameter
    this.subscriptions.push(this.route.queryParams.subscribe(params => {
      const genreIds: Array<string> = ['rock', 'mainstream', 'techno', 'albums', 'personal'];
      const genre = params?.genre;
      if (genre && genreIds.indexOf(genre) >= 0) {
        const genres = this.videoManagerService.getGenres();
        this.videoManagerService.changeActiveGenre(genres[genreIds.indexOf(genre)]);
      }
    }));
    // Initial assignments
    this.refresh();
    this.activeVideo = this.musicSuggestions[0];
  }

  /**
   * Destructor takes care of all subscriptions to avoid memory leaks
   */
  ngOnDestroy() {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

  private refresh() {
    this.videos.subscribe(videoList => {
      this.musicSuggestions = [...videoList];
    }).unsubscribe();
  }

  // ############################
  // #### MUSIC PLAYER LOGIC ####
  // ############################
  /**
   * Loads the current video list every time, it has been changed in the video manager service
   * @param suggestions The updated list of videos to display
   */
  public updateMusicSuggestions(suggestions: Array<Video>): void {
    this.musicSuggestions = suggestions;
  }


  /**
   * Scrolls to a specific target HTMLElement
   * This is used when clicking the INFO button (scroll to info text)
   * @param el The target element to scroll to
   */
  scrollToElement(el: HTMLElement) {
    el.scrollIntoView();
  }


  /**
   * Event management for enabling/disabling toggles (Autoplay and Play All)
   * - Disabling Autoplay automatically disabled Play All
   * - Enabling Play All automatically enables Autoplay and starts the playback (either active video index or from the start)
   * - Disabling Play All only resets the playback if the playback of the last video in the list disabled it
   * @param id The markup ID of the toggle event. Its value is used to set associated flags.
   */
  handleToggle(id: string) {
    if (id === 'autoplay') {
      if (!this.autoplay) {
        this.playAll = false;
      }
    } else if (this.playAll) {
      this.autoplay = true;
      this.activeIndex = (this.activeIndex >= 0 ? this.activeIndex : 0) - 1;
      this.runAsPlaylist();
    }
    if (!this.playAll && this.activeIndex === this.musicSuggestions.length-1) {
      this.activeIndex = 0;
      this.trackList.updateTrackHighlighting(0);
    }
  }


  /**
   * This method is triggered by the TrackListComponent
   * If Play All is active, runAsPlaylist is called to interrupt the current playback
   * and continue with the new video selection. If Play All is inactive, changeActiveVideo
   * is called instead to update the iframe and trigger the track list entry highlighting.
   * @param index The index of the video in musicSuggestions to switch to
   */
  changeVideoByClick(index: number) {
    if (this.playAll) {
      this.activeIndex = index - 1;
      this.runAsPlaylist();
    } else {
      this.changeActiveVideo(index, this.contentArea.nativeElement);
    }
  }


  /**
   * Based on an HTML event this method is called. Based on YouTube documentation,
   * a post request is sent to YouTube to either resume or pause the video playback.
   */
  playPauseVideoCounter() {
    const iframe = document.querySelector('iframe');
    if (this.counterPaused) {
      iframe?.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      this.startCounter();
    } else {
      iframe?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      clearInterval(this.interval);
    }
    this.counterPaused = !this.counterPaused;
  }


  /**
   * The interval for playing songs is reset after reducing the active index by two.
   * This activates a switch to the previous (x-2+1 => x-1) song in the startCounter method.
   * In case the playback has been paused, it will continue with the next song.
   */
  playPreviousSong() {
    this.activeIndex -= 2;
    this.remainingTime = 0;
    if (this.counterPaused) {
      this.playPauseVideoCounter();
      this.counterPaused = false;
    }
  }


  /**
   * The interval for playing songs is reset. This activates a switch to
   * the next song in the startCounter method.
   * In case the playback has been paused, it will continue with the next song.
   * If the current song is the last in the list, the Play All toggle is disabled
   * and the first video of the list is set as active (highlighting and iframe adjustment)
   */
  playNextSong() {
    this.remainingTime = 0;
    if (this.counterPaused) {
      this.playPauseVideoCounter();
      this.counterPaused = false;
    }
  }


  /**
   * Applies the Fisher-Yates shuffle algorithm to the music list
   * The activeIndex (indicating the active video) is reset to the
   * first element of the new list.
   * If the list is shuffled while Play All is enabled, the playback
   * starts from the top of the new musicSuggestions list.
   */
  triggerShuffle() {
    const shuffledSongs = this.musicSuggestions.map(x => Object.assign({}, x));
    for (const video of this.musicSuggestions) {
      let m = shuffledSongs.length;
      let t;
      let i;

      while (m) {
        i = Math.floor(Math.random() * m--);
        t = shuffledSongs[m];
        shuffledSongs[m] = shuffledSongs[i];
        shuffledSongs[i] = t;
      }
    }
    this.musicSuggestions = shuffledSongs;
    this.activeIndex = 0;
    if (this.playAll) {
      this.runAsPlaylist();
    }
  }


  /**
   * If the Play All toggle is enabled, the autoplay feature uses the duration of videos to
   * automatically continue with the next one, once the time is up.
   * As long as the remaining time is not zero, it is reduced by one each second
   * Once the remaining time hits zero, the next video in the list is selected and methods for
   * starting the playback are called. The remainingTime is set to the duration of the new video
   * In case the player finishes playing the last video, the Play All toggle is disabled and the
   * first video in the list is selected.
   * @private
   */
  private startCounter() {
    this.interval = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else if (this.playAll && this.activeIndex < this.musicSuggestions.length) {
        this.activeIndex++;
        if (this.activeIndex < this.musicSuggestions.length) {
          this.changeActiveVideo(this.activeIndex, null);
          this.remainingTime = this.musicSuggestions[this.activeIndex].duration;
        } else {
          this.playAll = false;
          this.changeActiveVideo(0, null);
        }
      }
    }, 1000);
  }


  /**
   * If a video playback is currently happening it is reset. If playback has been paused,
   * the playback will resume based on a new active video selection
   * @private
   */
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


  /**
   * Actions are only executed if the index is valid.
   * - the active video is updated in the iframe
   * - highlighting in the track list is adjusted
   * - scrolling to the element of interest is executed
   * @param index
   * @param video
   * @private
   */
  private changeActiveVideo(index: number, video: HTMLElement | null) {
    this.refresh();
    if (index < 0 || index > this.musicSuggestions.length) {
      return;
    }

    this.activeVideo = new Video(
      this.musicSuggestions[index].artist,
      this.musicSuggestions[index].track,
      this.musicSuggestions[index].youtube,
      this.musicSuggestions[index].duration
    );
    if (this.autoplay) {
      this.activeVideo.youtube += (this.activeVideo.youtube.indexOf('?') === -1 ? '?' : '&') + 'autoplay=1&enablejsapi=1';
    }
    this.trackList.updateTrackHighlighting(index);
    this.activeIndex = index;

    if (video) {
      video.scrollIntoView();
    } else if (index > 1) {
      VideoProvider.getNthTrackElement(index - 2)?.scrollIntoView();
    }
  }
}
