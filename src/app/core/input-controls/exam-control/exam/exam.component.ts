import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SelectComponent} from "@core/input-controls/select-control";
import { DatetimeComponent } from './../../datetime-control/datetime/datetime.component';
import { TextComponent } from './../../text-control/text/text.component';
import { UploadFileComponent } from './../../upload-file-control/upload-file/upload-file.component';
import { TreeSelectComponent } from './../../select-control/tree-select/tree-select.component';
import { NumberComponent } from './../../number-control/number/number.component';
import { TextAreaComponent } from './../../text-control/textarea/text-area/text-area.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'celltech-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit{
  settingForm: any;
  settingFieldComponents: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('../../assets/dynamicForm.json').subscribe((data: any) => {
      this.settingForm = data.data.settingForm;
      this.settingFieldComponents = data.data.settingFieldComponents;
    });
  }

  getElementType(componentId: string): string | undefined {
    const fieldComponent = this.settingFieldComponents.find(
      (component: any) => component.component === componentId
    );
  
    return fieldComponent?.settings?.form?.formElementType;
  }
}
