import {Component, OnInit} from '@angular/core';
import {NameIconPair, Renditions} from '@app/models';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  reason: string;
  buttonClickText: string;
  submittedSuccessfully = false;
  // HERO COMPONENT
  headline: Array<NameIconPair> = [
    {name: 'contact.hero.headline', icon: null}
  ];
  description = 'contact.hero.subline';
  images: Renditions = {
    mobile: 'contact/hero-576.jpg',
    tablet: 'contact/hero-768.jpg',
    tabletLandscape: 'contact/hero-992.jpg',
    laptop: 'contact/hero-1200.jpg',
    desktop: 'contact/hero-1900.jpg',
    extraLarge: 'contact/hero.jpg'
  };
  imageSource = 'https://www.pexels.com/@pixabay';
  imageOrientation = 'center';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.buttonClickText = 'Feature is still under construction. Sending the form is not possible yet.';
  }

  // todo: form validation
  // using ErrorStateMatcher, see https://material.angular.io/components/input/overview
  handleSubmitButtonClick() {
    if (this.firstName && this.lastName && this.email && this.message && this.reason) {
      this.submittedSuccessfully = true;
      // this.callEmailApi();
      this.buttonClickText = 'I was clicked :3'; // todo: translate & move to dialog
    } else {
      this.submittedSuccessfully = false;
      this.buttonClickText = 'Error :('; // todo: translate & move to dialog
    }
  }

  private callEmailApi() { // todo: use postman for testing
    const formData = new FormData();
    formData.append('firstName', this.firstName);
    formData.append('lastName', this.lastName);
    formData.append('email', this.email);
    formData.append('phone', this.phone);
    formData.append('message', this.message);
    formData.append('reason', this.reason);
    this.http.post('/email.php', formData).subscribe({
      next: response => console.log(response),
      error: error => console.log('There was an error! ', error)
    });
  }

}
