import { Component, OnInit } from '@angular/core';
import {NameIconPair} from '../../models/nameIconPair';
import {Renditions} from '../../models/renditions';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  firstName: string;
  lastName: string;
  reason: string;
  email: string;
  phone: string;
  buttonClickText: string;
  submittedSuccessfully = false;
  // HERO COMPONENT
  headline: Array<NameIconPair> = [
    {name: 'contact.hero.headline', icon: null}
  ];
  description = 'contact.hero.subline';
  images: Renditions = {
    mobile: 'contact/hero576.jpg',
    tablet: 'contact/hero768.jpg',
    tabletLandscape: 'contact/hero992.jpg',
    desktop: 'contact/hero1200.jpg',
    extraLarge: 'contact/hero2000.jpg'
  };
  imageSource = 'https://www.pexels.com/@pixabay';
  imageOrientation = 'center';
  constructor() { }

  ngOnInit() {
  }

  handleSubmitButtonClick() {
    if (this.firstName && this.lastName && this.email && this.reason) {
      this.submittedSuccessfully = true;
      this.buttonClickText = 'I was clicked :3';
    } else {
      this.submittedSuccessfully = false;
      this.buttonClickText = 'Error :(';
    }
  }

}
