import { Injectable } from '@angular/core';
import {SocialSharing} from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  static socialSharingInfo: Array<SocialSharing> = [
    {
      page: 'home',
      ogTitle: 'Website - Home Page',
      ogDescription: 'This is the website of Thomas Bernwinkler',
      ogImage: 'http://thom4s.bplaced.net/assets/img/home/entrance-1200.jpg',
      ogImageAlt: 'Entrance image representing the homepage of this website',
      ogType: 'website',
      ogUrl: 'http://thom4s.bplaced.net',
      ogLocale: 'en_US',
      twitterTitle: 'Website - Home Page',
      twitterDescription: 'This is the website of Thomas Bernwinkler',
      twitterImage: 'http://thom4s.bplaced.net/assets/img/home/entrance-1200.jpg'
    },
    {
      page: 'home',
      ogTitle: 'Webseite - Startseite',
      ogDescription: 'Dies ist die Webseite von Thomas Bernwinkler',
      ogImage: 'http://thom4s.bplaced.net/assets/img/home/entrance-1200.jpg',
      ogImageAlt: 'Das Bild eines Eingangs repräsentiert die Homepage dieser Webseite',
      ogType: 'website',
      ogUrl: 'http://thom4s.bplaced.net',
      ogLocale: 'de_DE',
      twitterTitle: 'Website - Home Page',
      twitterDescription: 'Das Bild eines Eingangs repräsentiert die Homepage dieser Webseite',
      twitterImage: 'http://thom4s.bplaced.net/assets/img/home/entrance-1200.jpg'
    },
    {
      page: 'music',
      ogTitle: 'Website - Music Page',
      ogDescription: 'Enjoy the music suggestions',
      ogImage: 'http://thom4s.bplaced.net/assets/img/music/audio-1200.jpg',
      ogImageAlt: 'Music instruments on a gray background',
      ogType: 'website',
      ogUrl: 'http://thom4s.bplaced.net/music',
      ogLocale: 'en_US',
      twitterTitle: 'Website - Music Page',
      twitterDescription: 'Enjoy the music suggestions',
      twitterImage: 'http://thom4s.bplaced.net/assets/img/music/audio-1200.jpg'
    },
    {
      page: 'music',
      ogTitle: 'Webseite - Musikseite',
      ogDescription: 'Gnieße die Musikvorschläge',
      ogImage: 'http://thom4s.bplaced.net/assets/img/music/audio-1200.jpg',
      ogImageAlt: 'Music instruments on a gray background',
      ogType: 'website',
      ogUrl: 'http://thom4s.bplaced.net/music',
      ogLocale: 'de_DE',
      twitterTitle: 'Webseite - Musikseite',
      twitterDescription: 'Gnieße die Musikvorschläge',
      twitterImage: 'http://thom4s.bplaced.net/assets/img/music/audio-1200.jpg'
    },
    {
      page: 'projects',
      ogTitle: 'Website - Project Overview',
      ogDescription: 'Check out the content and technologies of my past projects',
      ogImage: 'http://thom4s.bplaced.net/assets/img/projects/diagram1200.jpg',
      ogImageAlt: 'A diagram listing different parts of a project',
      ogType: 'website',
      ogUrl: 'http://thom4s.bplaced.net/projects',
      ogLocale: 'en_US',
      twitterTitle: 'Website - Project Overview',
      twitterDescription: 'Check out the content and technologies of my past projects',
      twitterImage: 'http://thom4s.bplaced.net/assets/img/projects/diagram1200.jpg'
    },
    {
      page: 'projects',
      ogTitle: 'Webseite - Projektüberblick',
      ogDescription: 'Wirf doch einen Blick auf die Inhalte und Technologien meiner vergangenen Projekte',
      ogImage: 'http://thom4s.bplaced.net/assets/img/projects/diagram1200.jpg',
      ogImageAlt: 'Music instruments on a gray background',
      ogType: 'website',
      ogUrl: 'http://thom4s.bplaced.net/music',
      ogLocale: 'de_DE',
      twitterTitle: 'Webseite - Projektüberblick',
      twitterDescription: 'Wirf doch einen Blick auf die Inhalte und Technologien meiner vergangenen Projekte',
      twitterImage: 'http://thom4s.bplaced.net/assets/img/projects/diagram1200.jpg'
    }
  ];

  constructor() { }
}
