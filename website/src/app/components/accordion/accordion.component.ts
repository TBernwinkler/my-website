import {Component, Input, OnInit} from '@angular/core';
import {ImageReference} from '@app/models/image-reference';
import {faAngleDoubleRight, faCaretDown, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import {AppComponent} from '@app/app.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  // data to display
  @Input() imageReferences: Array<ImageReference> = [];
  // icons
  faCaretDown = faCaretDown;
  faCaretRight = faCaretRight;
  faAngleDoubleRight = faAngleDoubleRight;

  constructor(public app: AppComponent) {
  }

  ngOnInit(): void {
    this.imageReferences[0].active = true;
  }

  changeSelection(selection: ImageReference): void {
    this.imageReferences.map(entry => entry.active = false);
    if (selection) {
      const entry = this.imageReferences.find(entry => entry === selection);
      if (entry) {
        entry.active = true;
      }
    }
  }


}
