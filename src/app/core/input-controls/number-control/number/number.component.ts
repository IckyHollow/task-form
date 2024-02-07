import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'celltech-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberComponent),
      multi: true
    }
  ]
})
export class NumberComponent implements ControlValueAccessor {
  value: any;
  onChange: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  onHandleChangeValue(value: any) {
    this.value = value;
    this.onChange(this.value);
  }
}
