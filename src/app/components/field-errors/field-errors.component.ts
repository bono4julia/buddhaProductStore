import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ErrorMessages } from '../../consts/error-messages';

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.css']
})
export class FieldErrorsComponent implements OnInit {

  @Input() fieldName: string;
  @Input() form: FormGroup;
  @Input() submitted: boolean;

  errorMessages = ErrorMessages;

  constructor() { }

  ngOnInit() {
  }

}
