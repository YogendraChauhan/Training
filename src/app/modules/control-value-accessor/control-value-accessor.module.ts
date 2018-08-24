import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { ReactiveFormExampleComponent } from './examples/reactive-form-example/reactive-form-example.component';
import { TemplateDrivenFormExampleComponent } from './examples/template-driven-form-example/template-driven-form-example.component';
import { ControlValueAccessorComponent } from './control-value-accessor.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    CustomInputComponent,
    ReactiveFormExampleComponent,
    TemplateDrivenFormExampleComponent,
    ControlValueAccessorComponent
  ],
  exports: [
    CustomInputComponent,
    ReactiveFormExampleComponent,
    TemplateDrivenFormExampleComponent,
    ControlValueAccessorComponent
  ]
})
export class ControlValueAccessorModule { }
