import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { isFunction } from 'lodash';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'celltech-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatetimeComponent),
      multi: true
    }
  ]
})
export class DatetimeComponent implements ControlValueAccessor {
  @Input() isDisabled!: boolean;
  @Output() selected = new EventEmitter();
  value: any;
  public touched!: () => void;

  // Add any other input properties and methods needed for datetime selection

  constructor(private i18n: NzI18nService) {
    i18n.setLocale(en_US);
  }

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
    this.selected.emit(this.value);
  }
}
