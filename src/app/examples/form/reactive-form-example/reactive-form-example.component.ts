import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css']
})
export class ReactiveFormExampleComponent {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }
}
