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

  columnDefinitions: Array<{columnName: string, columnLabel: string}> =
    [
      {columnName: 'page', columnLabel: 'legal.imageReferences.columnNames.page'},
      {columnName: 'imageName', columnLabel: 'legal.imageReferences.columnNames.imageName'},
      {columnName: 'creator', columnLabel: 'legal.imageReferences.columnNames.creator'},
      {columnName: 'license', columnLabel: 'legal.imageReferences.columnNames.license'}
    ];
  columnNames: Array<string> = ['page', 'imageName', 'creator', 'license']
  imageReferences: Array<ImageReference> = [
    {
      page: 'header.home',
      creator: 'Pixabay',
      imageName: 'legal.imageReferences.entrance.imageName',
      imageUrl: 'home/entrance-576.jpg',
      source: 'https://www.pexels.com/photo/bedroom-door-entrance-guest-room-271639/',
      license: 'legal.imageReferences.entrance.license',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: 'header.home',
      creator: 'Negative Space',
      imageName: 'legal.imageReferences.zoomedCode.imageName',
      imageUrl: 'home/zoomed-code-280.jpg',
      source: 'https://www.pexels.com/photo/office-working-app-computer-97077/',
      license: 'legal.imageReferences.zoomedCode.license',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: 'header.home',
      creator: 'Snapwire',
      imageName: 'legal.imageReferences.audio.imageName',
      imageUrl: 'home/audio-280.jpg',
      source: 'https://www.pexels.com/photo/audio-e-guitars-guitars-music-6966/',
      license: 'legal.imageReferences.audio.license',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: 'header.home',
      creator: 'Brett Sayles',
      imageName: 'legal.imageReferences.network.imageName',
      imageUrl: 'home/network-280.jpg',
      source: 'https://www.pexels.com/photo/blur-close-up-device-electronics-1597776/',
      license: 'legal.imageReferences.network.license',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: 'header.projects',
      creator: 'Christina Morillo',
      imageName: 'legal.imageReferences.diagram.imageName',
      imageUrl: 'projects/diagram576.jpg',
      source: 'https://www.pexels.com/de-de/foto/briefe-buchstaben-diagramm-festhalten-1181311/',
      license: 'legal.imageReferences.diagram.license',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: 'header.projects',
      creator: 'Markus Spiske',
      imageName: 'legal.imageReferences.markup.imageName',
      imageUrl: 'projects/markup576.jpg',
      source: 'https://www.pexels.com/photo/creative-internet-computer-display-2004161/',
      license: 'legal.imageReferences.markup.license',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: 'header.projects',
      creator: 'Yaffe Lab at MIT',
      imageName: 'legal.imageReferences.transiteLogo.imageName',
      imageUrl: 'projects/transite-logo.svg',
      source: 'https://transite.mit.edu/img/logo_wide.svg',
      license: 'legal.imageReferences.transiteLogo.license',
      licenseLink: 'https://en.wikipedia.org/wiki/MIT_License'
    },
    {
      page: 'header.projects',
      creator: 'Yaffe Lab at MIT',
      imageName: 'legal.imageReferences.scansiteLogo.imageName',
      imageUrl: 'projects/logo-scansite.png',
      source: 'https://scansite4.mit.edu/4.0/img/logo_scansite.png',
      license: 'legal.imageReferences.scansiteLogo.license',
      licenseLink: 'https://en.wikipedia.org/wiki/MIT_License'
    },
    {
      page: 'header.projects',
      creator: 'UAS Oberösterreich, Universtiy of Salzburg',
      imageName: 'legal.imageReferences.biodappsLogo.imageName',
      imageUrl: 'projects/biodapps-logo.png',
      source: 'https://pbwww.che.sbg.ac.at/wp-content/uploads/2014/09/logo_coming_soon.png',
      license: 'legal.imageReferences.biodappsLogo.license',
      licenseLink: 'https://en.wikipedia.org/wiki/MIT_License'
    },
    {
      page: 'header.projects',
      creator: 'Noah Erickson',
      imageName: 'legal.imageReferences.android.imageName',
      imageUrl: 'projects/android576.jpg',
      source: 'https://www.pexels.com/photo/creative-internet-computer-display-2004161/',
      license: 'legal.imageReferences.android.logo',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: 'header.contact',
      creator: 'Kaboompics.com',
      imageName: 'legal.imageReferences.contactBackground.imageName',
      imageUrl: 'contact/hero-576.jpg',
      source: 'https://www.pexels.com/photo/blank-paper-with-pen-and-coffee-cup-on-wood-table-6357/',
      license: 'legal.imageReferences.contactBackground.license',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: 'header.contact',
      creator: 'Jens Johnsson',
      imageName: 'legal.imageReferences.direction.imageName',
      imageUrl: 'contact/contact1200.jpg',
      source: 'https://www.pexels.com/photo/mountains-nature-arrow-guide-66100/',
      license: 'legal.imageReferences.direction.license',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    },
    {
      page: '404',
      creator: 'khairul nizam',
      imageName: 'legal.imageReferences.comic.imageName',
      imageUrl: '404/comic.jpg',
      source: 'https://www.pexels.com/photo/doodle-comic-art-sketch-16516',
      license: 'legal.imageReferences.comic.license',
      licenseLink: 'https://www.pexels.com/creative-commons-images'
    }
  ];
  expandedElement: ImageReference | null;

  constructor() { }

  ngOnInit() {
  }

}
