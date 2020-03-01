import { Component, OnInit } from '@angular/core';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faFileContract = faFileContract;
  faLinkedIn = faLinkedin;
  faGithub = faGithub;

  constructor() { }

  ngOnInit() {
  }

}
