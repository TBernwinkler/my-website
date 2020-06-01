import { Component, OnInit } from '@angular/core';
import {faHeart, faArrowCircleUp, faMusic, faLaptopCode, faStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';
import {NameIconPair} from '../../models/nameIconPair';
import {Renditions} from '../../models/renditions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // ICONS
  faHeart = faHeart;
  faArrowCircleUp = faArrowCircleUp;
  faMusic = faMusic;
  faLaptopCode = faLaptopCode;
  faStar = faStar;
  faStarEmpty = faStarEmpty;
  headline: Array<NameIconPair> = [
    {name: 'home.hero.headline', icon: null}
  ];
  description = 'home.hero.subline';
  images: Renditions = {
    mobile: 'home/entrance-768.jpg',
    tablet: 'home/entrance-768.jpg',
    tabletLandscape: 'home/entrance-768.jpg',
    desktop: 'home/entrance-768.jpg',
    extraLarge: 'home/entrance-768.jpg'
  };
  imageSource = 'https://www.pexels.com/@pixabay';
  imageOrientation = 'center';

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // AS I DO NOT HAVE ACCESS TO THE APACHE SERVER OF MY HOSTING PROVIDER, I NEED TO REDIRECT PAGES IN A DIFFERENT WAY
    // TO AVOID PAGE NOT ON REFRESH

    let redirect = '';
    this.activatedRoute.queryParams.subscribe(params => {
      redirect = params.redirect;

      if (redirect === 'music' || redirect === 'projects' || redirect === 'contact' || redirect === 'legal') {
        this.router.navigate([redirect]);
      }
    });
  }

}
