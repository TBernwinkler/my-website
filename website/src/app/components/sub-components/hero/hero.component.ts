import {Component, Input, OnInit} from '@angular/core';
import {NameIconPair} from '../../../models/nameIconPair';
import {Renditions} from '../../../models/renditions';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() headline: Array<NameIconPair>;
  @Input() description: string;
  @Input() images: Renditions;
  @Input() imageSource: string;
  @Input() imageOrientation = 'bottom';

  breakpoints = [576, 768, 992, 1200, 1920]; // todo: consider 1920px rendition

  constructor() { }

  ngOnInit() {
  }

  getRendition() {
    const width = window.innerWidth;
    let image: string;
    if (width <= this.breakpoints[0]) {
      image = this.images.mobile;
    } else if (width <= this.breakpoints[1]) {
      image = this.images.tablet;
    } else if (width <= this.breakpoints[2]) {
      image = this.images.tabletLandscape;
    } else if (width <= this.breakpoints[3]) {
      image = this.images.laptop;
    } else if (width <= this.breakpoints[4]) {
      image = this.images.desktop;
    } else {
      image = this.images.extraLarge;
    }
    return image;
  }

}
