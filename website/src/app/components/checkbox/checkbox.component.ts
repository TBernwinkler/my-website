import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  @Input() boxChecked: boolean = false;
  @Input() labelText: string = '';
  @Output() boxChanged = new EventEmitter();

  constructor() { }

  emitUpdate() {
    this.boxChecked = !this.boxChecked;
    this.boxChanged.emit(this.boxChecked);
  }
}
