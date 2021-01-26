import {Component, Input} from '@angular/core';
import {ImageReference} from '@app/models/image-reference';
import {faAngleDoubleRight, faCaretDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input()
  imageReferences: Array<ImageReference> = [];
  faCaretDown = faCaretDown;
  faAngleDoubleRight = faAngleDoubleRight;

  constructor() {
  }

  isFirstEntry(reference: ImageReference): boolean {
    const firstEntry = this.imageReferences[0];
    return reference.imageName === firstEntry.imageName && reference.imageUrl === firstEntry.imageUrl;
  }

}
