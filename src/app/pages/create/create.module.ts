import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { FieldErrorsComponent } from '../../components/field-errors/field-errors.component';

@NgModule({
  imports: [
    CommonModule,
    CreateRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateComponent,
    FieldErrorsComponent
  ]
})
export class CreateModule { }
