import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AntModule} from "@core/modules/ant-design/ant.module";
import {SortAlphabetPipe} from "src/app/core/input-controls/pipes";
import {FormsModule} from "@angular/forms";
import {SelectComponent} from "@core/input-controls/select-control";
import { DatetimeComponent } from './datetime-control/datetime/datetime.component';
import { TextComponent } from './text-control/text/text.component';
import { UploadFileComponent } from './upload-file-control/upload-file/upload-file.component';
import { TreeSelectComponent } from './select-control/tree-select/tree-select.component';
import { NumberComponent } from './number-control/number/number.component';
import { TextAreaComponent } from './text-control/textarea/text-area/text-area.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ExamComponent } from './exam-control/exam/exam.component';
registerLocaleData(en);
// import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';

@NgModule({
  declarations: [
    SortAlphabetPipe,
    SelectComponent,
    DatetimeComponent,
    TextComponent,
    UploadFileComponent,
    TreeSelectComponent,
    NumberComponent,
    TextAreaComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    AntModule,
    FormsModule,
    EditorModule,
    NzUploadModule
  ],
  exports: [
    SortAlphabetPipe,
    SelectComponent,
    DatetimeComponent,
    TextComponent,
    UploadFileComponent,
    TreeSelectComponent,
    NumberComponent,
    TextAreaComponent,
    ExamComponent
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class InputControlModule {
}
