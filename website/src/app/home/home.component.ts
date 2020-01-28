import { Component, OnInit } from '@angular/core';
import { faHeart, faArrowCircleUp, faCircle, faMusic, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style = false;
  faHeart = faHeart;
  faArrowCircleUp = faArrowCircleUp;
  faCircle = faCircle;
  faMusic = faMusic;
  faLaptopCode = faLaptopCode;

  constructor() { }

  ngOnInit() {
  }

  firstClick() {
    this.h1Style = true;
  }

}
