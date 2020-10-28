import { Component, OnInit } from '@angular/core';
import {ImageReference} from '@app/models/image-reference';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class LegalComponent implements OnInit {

  // todo: remove image tooltips, add translations
  columnDefinitions: Array<{columnName: string, columnLabel: string}> =
    [
      {columnName: 'page', columnLabel: 'Page'}, {columnName: 'imageName', columnLabel: 'Image Name'},
      {columnName: 'creator', columnLabel: 'Creator'}, {columnName: 'license', columnLabel: 'License'}
    ];
  columnNames: Array<string> = ['page', 'imageName', 'creator', 'license']
  imageReferences: Array<ImageReference> = [
    {
      page: 'Home',
      creator: 'Pixabay',
      imageName: 'Entrance',
      imageUrl: 'home/entrance-576.jpg',
      source: 'https://www.pexels.com/photo/bedroom-door-entrance-guest-room-271639/',
      license: 'Pexels Creative Commons or Creative Commons Zero',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: 'Home',
      creator: 'Negative Space',
      imageName: 'Zoomed Code',
      imageUrl: 'home/zoomed-code-280.jpg',
      source: 'https://www.pexels.com/photo/office-working-app-computer-97077/',
      license: 'Pexels Creative Commons or Creative Commons Zero',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: 'Home',
      creator: 'Snapwire',
      imageName: 'Audio',
      imageUrl: 'home/audio-280.jpg',
      source: 'https://www.pexels.com/photo/audio-e-guitars-guitars-music-6966/',
      license: 'Pexels Creative Commons or Creative Commons Zero',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: 'Home',
      creator: 'Brett Sayles',
      imageName: 'Network',
      imageUrl: 'home/network-280.jpg',
      source: 'https://www.pexels.com/photo/blur-close-up-device-electronics-1597776/',
      license: 'Pexels Creative Commons or Creative Commons Zero',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: 'Projects',
      creator: 'Christina Morillo',
      imageName: 'Diagram',
      imageUrl: 'projects/diagram576.jpg',
      source: 'https://www.pexels.com/de-de/foto/briefe-buchstaben-diagramm-festhalten-1181311/',
      license: 'Pexels Creative Commons or Creative Commons Zero',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: 'Projects',
      creator: 'Markus Spiske',
      imageName: 'Markup',
      imageUrl: 'projects/markup576.jpg',
      source: 'https://www.pexels.com/photo/creative-internet-computer-display-2004161/',
      license: 'Pexels Creative Commons or Creative Commons Zero',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: 'Projects',
      creator: 'Yaffe Lab at MIT',
      imageName: 'Transite Logo',
      imageUrl: 'projects/transite-logo.svg',
      source: 'https://transite.mit.edu/img/logo_wide.svg',
      license: 'MIT License',
      licenseLink: 'https://en.wikipedia.org/wiki/MIT_License'
    },
    {
      page: 'Projects',
      creator: 'Yaffe Lab at MIT',
      imageName: 'Scansite Logo',
      imageUrl: 'projects/logo-scansite.png',
      source: 'https://scansite4.mit.edu/4.0/img/logo_scansite.png',
      license: 'MIT License',
      licenseLink: 'https://en.wikipedia.org/wiki/MIT_License'
    },
    {
      page: 'Projects',
      creator: 'UAS Oberösterreich, Universtiy of Salzburg',
      imageName: 'BioDApps Logo',
      imageUrl: 'projects/biodapps-logo.png',
      source: 'https://pbwww.che.sbg.ac.at/wp-content/uploads/2014/09/logo_coming_soon.png',
      license: 'MIT License',
      licenseLink: 'https://en.wikipedia.org/wiki/MIT_License'
    },
    {
      page: 'Projects',
      creator: 'Noah Erickson',
      imageName: 'Android',
      imageUrl: 'projects/android576.jpg',
      source: 'https://www.pexels.com/photo/creative-internet-computer-display-2004161/',
      license: 'Pexels Creative Commons or Creative Commons Zero',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: 'Projects',
      creator: 'Kaboompics.com',
      imageName: 'Contact Background',
      imageUrl: 'contact/hero-576.jpg',
      source: 'https://www.pexels.com/photo/blank-paper-with-pen-and-coffee-cup-on-wood-table-6357/',
      license: 'Pexels Creative Commons or Creative Commons Zero',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: 'Projects',
      creator: 'Jens Johnsson',
      imageName: 'Direction',
      imageUrl: 'contact/contact1200.jpg',
      source: 'https://www.pexels.com/photo/mountains-nature-arrow-guide-66100/',
      license: 'Pexels Creative Commons or Creative Commons Zero',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    }
  ];
  expandedElement: ImageReference | null;

  constructor() { }

  ngOnInit() {
  }

}
