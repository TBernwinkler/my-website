import {Component, OnInit} from '@angular/core';
import {faCaretDown, faCaretUp, faMusic} from '@fortawesome/free-solid-svg-icons';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  baseUrl = 'https://www.youtube-nocookie.com/embed/';
  classActive = 'active';
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  faMusic = faMusic;


  musicSuggestions: Array<{initials: string, artist: string, track: string, youtube: string }> = [
    {initials: 'PWD', artist: 'Parkway Drive', track: 'Prey', youtube: 'WL_8ZY89dP4'},
    {initials: 'IF', artist: 'In Flames', track: 'Take This Life', youtube: 'GRiC35zeziU'},
    {initials: 'B', artist: 'Beartooth', track: 'Body Bag', youtube: '81CakcFEH0U'},
    {initials: 'S', artist: 'Sabaton', track: 'Primo Victoria', youtube: 'qVHyl0P_P-M'},
    {initials: 'T', artist: 'Trivium', track: 'Anthem (We Are Fire)', youtube: 'Lp8p5OPtEe0?start=12'},
    {initials: 'EL', artist: 'Eluveitie', track: 'Inis Mona', youtube: 'iijKLHCQw5o'},
    {initials: 'RA', artist: 'Rise Against', track: 'Savior', youtube: 'e8X3ACToii0'},
    {initials: 'BE', artist: 'Betontod', track: 'Keine Popsongs', youtube: 'gFgaQDurt4Y'},
    {initials: 'BL', artist: 'Blink 182', track: 'What\'s my age again?', youtube: 'K7l5ZeVVoCA'},
    {initials: 'BB', artist: 'Breaking Benjamin', track: 'Dance With The Devil', youtube: 'IN_FFmeQAC0'},
    {initials: 'BFMV', artist: 'Bullet For My Valentine', track: 'Tears don\'t fall', youtube: '9sTQ0QdkN3Q'},
    {initials: 'C', artist: 'Callejon', track: 'Major Tom', youtube: '4rYYbFkvd5I'},
    {initials: 'Leo', artist: 'Leo Moracchioli', track: 'Despacito', youtube: 'hcQyFtHMfbs'},
    {initials: 'D', artist: 'Disturbed', track: 'Down With The Sickness', youtube: '09LTT0xwdfw'},
    {initials: 'D', artist: 'Dope', track: 'You Spin Me Around', youtube: 'Zuh29Xu5nSw'},
    {initials: '5FDP', artist: 'Five Finger Death Punch', track: 'The Bleeding', youtube: 'oDuevEAG6Cc'},
    {initials: 'LP', artist: 'Linkin Park', track: 'With You', youtube: 'M8UTS2iFXOo'},
    {initials: 'M', artist: 'Metallica', track: 'Master Of Puppets', youtube: 'xnKhsTXoKCI'},
    {initials: 'SA', artist: 'Sonata Arctica', track: 'The Cage', youtube: '685br8I_SpU'},
    {initials: 'S', artist: 'Stone Sour', track: 'Do Me A Favor', youtube: 'pSWKVJW-eHk'},
    {initials: 'DF', artist: 'Dragonforce', track: 'Through The Fire And The Flames', youtube: '0jgrCKhxE1s' },
    {initials: 'Sum', artist: 'Sum 41', track: 'Underclass Hero', youtube: 'PEz2d49XTk0'},
    {initials: 'V', artist: 'Volbeat', track: 'Still Counting', youtube: 'aXhjp85UNJI'},
    {initials: 'W', artist: 'We Came As Romans', track: 'Glad You Came', youtube: 'fs9TLctYsGI'},
    {initials: 'AA', artist: 'Amon Amarth', track: 'Persuit Of Vikings', youtube: 'mw0pylT0Tg0'},
    {initials: 'AE', artist: 'Arch Enemy', track: 'The World Is Yours', youtube: 'lk2-bgwA0Ro'},
    {initials: 'OM&M', artist: 'Of Mice And Men', track: 'Bones Exposed', youtube: 'IO-JbFtgeX4'},
    {initials: 'EC', artist: 'Eskimo Callboy', track: 'Crystals', youtube: 'qrWPKu37H1E'},
    {initials: 'HSB', artist: 'Heaven Shall Burn', track: 'Black Tears', youtube: '-PtfyRjkn40'},
    {initials: 'HU', artist: 'Hollywood Undead', track: 'Party By Myself', youtube: 'k1W50hyaUPo'},
    {initials: 'S', artist: 'Skillet', track: 'Hero', youtube: 'uGcsIdGOuZY'},
    {initials: 'ADTR', artist: 'A Day To Remember', track: 'All I Want', youtube: 'Pn-6eOxnEMI'}
  ];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

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

  // getUrl(url: string) {
  //   const inputUrl = this.baseUrl + url;
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(inputUrl);
  // }

}
