import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() boxChecked: boolean;
  @Input() labelText: string;
  @Output() boxChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitUpdate() {
    this.boxChecked = !this.boxChecked;
    this.boxChanged.emit(this.boxChecked);
    console.log(this.boxChecked);
  }
}
