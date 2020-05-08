import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  faArrowsAlt,
  faCaretDown,
  faCaretUp,
  faMinus,
  faMusic,
  faPauseCircle,
  faPlayCircle, faRandom, faStepBackward, faStepForward,
  faVolumeUp
} from '@fortawesome/free-solid-svg-icons';
import {Video} from '../../models';
import {MatSelectChange, MatSelectionListChange, MatSlideToggleChange} from '@angular/material';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  @ViewChild('videoPlayback', {static: false}) videoPlayback: ElementRef<HTMLElement>;
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
  inputVideoId = '';
  inputInterpret = '';
  inputTrack = '';
  inputDuration = 0;

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

  musicSuggestions: Array<Video> = [
    {artist: 'Parkway Drive', track: 'Prey', youtube: 'WL_8ZY89dP4?start=5', duration: 255},
    {artist: 'In Flames', track: 'Take This Life', youtube: 'GRiC35zeziU?start=7', duration: 221},
    {artist: 'Beartooth', track: 'Body Bag', youtube: '81CakcFEH0U', duration: 230},
    {artist: 'Sabaton', track: 'Primo Victoria', youtube: 'qVHyl0P_P-M', duration: 229},
    {artist: 'Trivium', track: 'Anthem (We Are Fire)', youtube: 'Lp8p5OPtEe0?start=12', duration: 241},
    {artist: 'Eluveitie', track: 'Inis Mona', youtube: 'iijKLHCQw5o', duration: 254},
    {artist: 'Rise Against', track: 'Savior', youtube: 'e8X3ACToii0', duration: 244},
    {artist: 'Betontod', track: 'Keine Popsongs', youtube: 'gFgaQDurt4Y', duration: 170},
    {artist: 'Blink 182', track: 'What\'s my age again?', youtube: 'K7l5ZeVVoCA', duration: 147},
    {artist: 'Breaking Benjamin', track: 'Dance With The Devil', youtube: 'IN_FFmeQAC0', duration: 228},
    {artist: 'Bullet For My Valentine', track: 'Tears don\'t fall', youtube: '9sTQ0QdkN3Q', duration: 277},
    {artist: 'Callejon', track: 'Major Tom', youtube: '4rYYbFkvd5I', duration: 270},
    {artist: 'Leo Moracchioli', track: 'Despacito', youtube: 'hcQyFtHMfbs?start=5', duration: 281},
    {artist: 'Dope', track: 'You Spin Me Around', youtube: 'Zuh29Xu5nSw', duration: 170},
    {artist: 'Disturbed', track: 'Down With The Sickness', youtube: '09LTT0xwdfw', duration: 217},
    {artist: 'Five Finger Death Punch', track: 'The Bleeding', youtube: 'oDuevEAG6Cc', duration: 269},
    {artist: 'Linkin Park', track: 'With You', youtube: 'M8UTS2iFXOo', duration: 205},
    {artist: 'Metallica', track: 'Master Of Puppets', youtube: 'xnKhsTXoKCI', duration: 517},
    {artist: 'Sonata Arctica', track: 'The Cage', youtube: '685br8I_SpU', duration: 280},
    {artist: 'Stone Sour', track: 'Do Me A Favor', youtube: 'pSWKVJW-eHk', duration: 244},
    {artist: 'Dragonforce', track: 'Through The Fire And The Flames', youtube: '0jgrCKhxE1s', duration: 301},
    {artist: 'Sum 41', track: 'Underclass Hero', youtube: 'PEz2d49XTk0', duration: 195},
    {artist: 'Volbeat', track: 'Still Counting', youtube: 'aXhjp85UNJI', duration: 262},
    {artist: 'We Came As Romans', track: 'Glad You Came', youtube: 'fs9TLctYsGI', duration: 192},
    {artist: 'Amon Amarth', track: 'Persuit Of Vikings', youtube: 'mw0pylT0Tg0', duration: 271},
    {artist: 'Arch Enemy', track: 'The World Is Yours', youtube: 'lk2-bgwA0Ro', duration: 316},
    {artist: 'Slipknot', track: 'Custer', youtube: 'FdBqOCS8LmM', duration: 255},
    {artist: 'Of Mice And Men', track: 'Bones Exposed', youtube: 'IO-JbFtgeX4?start=15', duration: 257},
    {artist: 'Eskimo Callboy', track: 'Crystals', youtube: 'qrWPKu37H1E', duration: 227},
    {artist: 'Heaven Shall Burn', track: 'Black Tears', youtube: '-PtfyRjkn40?start=18', duration: 200},
    {artist: 'Hollywood Undead', track: 'Party By Myself', youtube: 'k1W50hyaUPo', duration: 253},
    {artist: 'Skillet', track: 'Hero', youtube: 'uGcsIdGOuZY', duration: 197},
    {artist: 'A Day To Remember', track: 'All I Want', youtube: 'Pn-6eOxnEMI', duration: 215},
    {artist: 'Killswitch Engange', track: 'In Due Time', youtube: 'HANCzu70us4?start=8', duration: 218},
    {artist: 'The Offspring', track: 'You\'re Gonna Go Far, Kid', youtube: 'ql9-82oV2JE?start=18', duration: 180},
    {artist: 'The Bloodhound Gang', track: 'The Bad Touch', youtube: 'xat1GVnl8-k', duration: 244},
    {artist: 'Lucenzo & Don Omar', track: 'Danza Kuduro', youtube: 'rUFgacK8sZ0?start=37', duration: 202},
    {artist: 'The Rasmus', track: 'In The Shadows', youtube: '_ao2u7F_Qzg', duration: 210}
  ];

  trackList: Array<{name: string, value: string}> = [];
  selectedTracks: Array<string> = [];

  constructor() { }

  ngOnInit() {
    this.activeVideo = this.musicSuggestions[0];

    this.musicSuggestions.forEach(entry => {
      this.trackList.push({name: entry.artist + ' - ' + entry.track, value: entry.youtube});
    });
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

  // ALTERNATIVE PART
  onVideoChange(index: number, video: HTMLElement) {
    if (this.playAll) {
      this.activeIndex = index - 1;
      this.runAsPlaylist();
    } else {
      this.changeActiveVideo(index, video);
    }
  }

  isSelected(index: number) {
    const selection = document.querySelector('#cdk-drop-list-0 > div:nth-child(' + (index + 1) + ') > div');
    if (!selection) {
      return index === 0;
    }
    return selection.classList.contains(this.classActive);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.musicSuggestions, event.previousIndex, event.currentIndex);
  }

  handleToggle(toggle: MatSlideToggleChange, id: string) {
    if (id === 'autoplay') {
      if (!this.autoplay) {
        this.playAll = false;
      }
    } else {
      if (this.playAll) {
        this.autoplay = true;
        this.activeIndex = (this.activeIndex ? this.activeIndex : 0) - 1;
        this.runAsPlaylist();
      }
    }
  }

  handleDeleteVideoListSelectionChange(event: MatSelectChange) {
    this.selectedTracks = event.source.value;
    console.log(this.selectedTracks);
  }

  handleRemoveVideosFromSuggestions() {
    // REMOVE VIDEO TO THE LEFT
    if (this.selectedTracks.length > 0) {
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
    }
    this.selectedTracks = [];
  }

  playPauseVideoCounter() {
    const iframe = document.querySelector('iframe');
    if (this.counterPaused) {
      // resume
      // todo: reuse this instead of parsing all the entries as implemented today for finding the index
      this.activeIndex = this.musicSuggestions.indexOf(this.musicSuggestions.find(
        entry => entry.artist === this.activeVideo.artist && entry.track === this.activeVideo.track));
      iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      this.startCounter();
    } else {
      // pause
      iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      clearInterval(this.interval);
    }
    this.counterPaused = !this.counterPaused;
  }

  startCounter() {
    this.interval = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else if (this.playAll && this.activeIndex < this.musicSuggestions.length) {
        this.activeIndex++;
        this.changeActiveVideo(this.activeIndex, null);
        this.remainingTime = this.musicSuggestions[this.activeIndex].duration;
      } else {
        console.log('invalid case while checking video play status');
      }
    }, 1000);
  }

  scrollToElement(el: HTMLElement) {
    el.scrollIntoView();
  }

  playPreviousSong() {
    this.activeIndex -= 2;
    this.remainingTime = 0;
  }

  playNextSong() {
    this.remainingTime = 0;
  }

  addNewVideo() {
    if (this.inputVideoId && this.inputInterpret && this.inputTrack && this.inputDuration > 0) {
      this.musicSuggestions.push({
        artist: this.inputInterpret,
        track: this.inputTrack,
        youtube: this.inputVideoId,
        duration: this.inputDuration
      });
      this.inputInterpret = '';
      this.inputTrack = '';
      this.inputVideoId = '';
      this.inputDuration = 0;
    }
  }

  private runAsPlaylist() {
    this.remainingTime = 0;
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.startCounter();
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
    const selection = document.querySelector('#cdk-drop-list-0 > div:nth-child(' + (index + 1) + ') > div');
    if (selection) {
      selection.classList.contains(this.classActive) ?
        selection.classList.remove(this.classActive) : selection.classList.add(this.classActive);

      const previousSelection = document.querySelector('#cdk-drop-list-0 > div:nth-child(' + (this.previous + 1) + ') > div');
      previousSelection.classList.contains(this.classActive) ?
        previousSelection.classList.remove(this.classActive) : selection.classList.add(this.classActive);
      this.previous = index;
      this.activeIndex = index;
    }

    if (video) {
      video.scrollIntoView();
    }
  }

}
