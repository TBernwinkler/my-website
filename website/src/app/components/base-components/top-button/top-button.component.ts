import { Component, OnInit } from '@angular/core';
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.scss']
})
export class TopButtonComponent implements OnInit {

  faLevelUpAlt = faLevelUpAlt;

  constructor() { }

  ngOnInit() {
  }

  scrollToTop() {
    document.querySelector('#navigation')?.scrollIntoView();
  }

}
