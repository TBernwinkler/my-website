import { Component, OnInit } from '@angular/core';
import { faCaretDown, faCaretUp, faMusic } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  classActive = 'active';
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  faMusic = faMusic;

  constructor() { }

  ngOnInit() {
  }

  toggleEntry(idx: number) {
    const elements = document.querySelectorAll('.overview a');
    const overviewElement = elements[idx];
    const contentElement = document.querySelector('li:nth-child(' + (idx + 1) + ') div.iframe-container');

    if (overviewElement.classList.contains(this.classActive)) {
      overviewElement.classList.remove(this.classActive);
      contentElement.classList.remove(this.classActive);
    } else {
      overviewElement.classList.add(this.classActive);
      contentElement.classList.add(this.classActive);
    }
    console.log(contentElement);
  }

}
