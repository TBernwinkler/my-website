import {Component, Input, OnInit} from '@angular/core';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements OnInit {

  @Input()
  inputId: string;
  @Input()
  labelText: string;
  @Input()
  isRequired = false;
  faAsterisk = faAsterisk;
  @Input()
  inputType = 'text';
  @Input()
  defaultValue = '';
  inputValue: string;
  numberMinimum = 0;

  constructor() { }

  ngOnInit(): void {
    this.inputValue = this.defaultValue;
  }

}
