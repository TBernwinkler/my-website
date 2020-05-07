import { Component, OnInit } from '@angular/core';
import { faHeart, faArrowCircleUp, faCircle, faMusic, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';

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

  firstClick() {
    this.h1Style = true;
  }

}
