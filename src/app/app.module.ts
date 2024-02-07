import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AntModule} from "@core/modules/ant-design/ant.module";
import {InputControlModule} from "@core/input-controls/input-control.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { CreateTaskV2Component } from './create-task-v2/create-task-v2.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicService } from '@shared/services/dynamic.service';
// import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    CreateTaskV2Component
  ],
  imports: [
    AntModule,
    BrowserModule,
    AppRoutingModule,
    InputControlModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EditorModule,
    NzButtonModule,
    ReactiveFormsModule
    // NzGridModule,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    DynamicService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
