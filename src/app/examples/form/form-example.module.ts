import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormExampleComponent } from './template-driven-form-example/template-driven-form-example.component';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';

@NgModule({
  declarations: [CustomInputComponent, ReactiveFormExampleComponent, TemplateDrivenFormExampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormExampleModule { }
