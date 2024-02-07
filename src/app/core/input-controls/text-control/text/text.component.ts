import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { isFunction } from 'lodash';

@Component({
  selector: 'celltech-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextComponent),
      multi: true
    }
  ]
})
export class TextComponent implements ControlValueAccessor {
  @Input() isDisabled!: boolean;
  @Output() textChanged = new EventEmitter();
  value: any;
  public touched!: () => void;

  private onChange = (value: any) => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }

  onHandleChangeValue(value: any) {
    this.value = value;
    if (isFunction(this.onChange)) {
      this.onChange(this.value);
    }
    this.textChanged.emit(this.value);
  }
}
