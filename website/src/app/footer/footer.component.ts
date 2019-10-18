import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faFileContract = faFileContract;
  dateLastEdited = formatDate(new Date(), 'yyyy/MM/dd', 'en');

  constructor() { }

  ngOnInit() {
  }

}
