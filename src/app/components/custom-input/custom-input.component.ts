import { Component, Renderer2, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CustomInputComponent,
    multi: true
  }],
  encapsulation: ViewEncapsulation.None
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() type;
  @Input() placeholder;
  value;
  onChange;
  constructor(private _renderer: Renderer2, private _elemRef: ElementRef) {
    this.value = '';
  }
  writeValue(value: any): void {
    // writes value form model to view
    this.value = value;
    this._renderer.setProperty(this._elemRef.nativeElement.firstChild, 'value', this.value);
  }

  registerOnChange(fn: any): void {
    // register change from view to update form model
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    // register on view touch
  }
  setDisabledState?(isDisabled: boolean): void {
    // set disabled state
    this._renderer.setProperty(this._elemRef.nativeElement.firstChild, 'disabled', isDisabled);
  }

  change(event) {
    this.value = event.target.value;
    console.log(this.value);
    this.onChange(this.value);
  }
}
