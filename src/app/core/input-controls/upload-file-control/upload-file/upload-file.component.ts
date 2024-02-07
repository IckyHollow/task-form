import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'celltech-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadFileComponent),
      multi: true,
    },
  ],
})
export class UploadFileComponent implements ControlValueAccessor {
  @Input() isDisabled!: boolean;
  @Output() fileChanged = new EventEmitter();
  value: any;
  public touched!: () => void;
  fileList: NzUploadFile[] = [];

  private onChange = (value: any) => {};

  constructor(private message: NzMessageService) {}

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

  handleChange(info: { file: NzUploadFile }): void {
    if (info.file.status === 'done') {
      this.message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.message.error(`${info.file.name} file upload failed.`);
    }

    this.fileChanged.emit(this.value);
  }
}
