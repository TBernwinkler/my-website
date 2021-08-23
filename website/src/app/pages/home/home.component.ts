import {Component} from '@angular/core';
import {faArrowCircleUp, faHeart, faLaptopCode, faMusic, faStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons';
import {NameIconPair, Renditions} from '@app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // ICONS
  faHeart = faHeart;
  faArrowCircleUp = faArrowCircleUp;
  faMusic = faMusic;
  faLaptopCode = faLaptopCode;
  faStar = faStar;
  faStarEmpty = faStarEmpty;
  headline: Array<NameIconPair> = [
    {name: 'home.hero.headline'}
  ];
  description = 'home.hero.subline';
  images: Renditions = {
    mobile: 'home/entrance-576.jpg',
    tablet: 'home/entrance-768.jpg',
    tabletLandscape: 'home/entrance-992.jpg',
    laptop: 'home/entrance-1200.jpg',
    desktop: 'home/entrance-1900.jpg',
    extraLarge: 'home/entrance.jpg'
  };
  imageSource = 'https://www.pexels.com/@pixabay';
  imageOrientation = 'center';

  constructor() { }

}
