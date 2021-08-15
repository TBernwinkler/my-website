import {Component} from '@angular/core';
import {faTired} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  faTired = faTired;

  constructor() { }

}
