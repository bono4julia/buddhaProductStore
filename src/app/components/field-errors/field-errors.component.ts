import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.css']
})
export class FieldErrorsComponent implements OnInit {

  @Input() fieldName: string;
  @Input() form: FormGroup;
  @Input() submitted: boolean;

  constructor() { }

  ngOnInit() {
  }

}
