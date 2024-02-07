import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {DynamicForm} from "@shared/custom-input-controls/dynamic/form/form.model";
import { KeyValuePair } from '@core/core.model';
import { DynamicService } from '@shared/services/dynamic.service';

@Component({
  selector: 'app-create-task-v2',
  templateUrl: './create-task-v2.component.html',
  styleUrls: ['./create-task-v2.component.scss']
})
export class CreateTaskV2Component implements OnInit{
  settingForm: any;
  settingFieldComponents: any;
  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit() {
    this.http.get('../../assets/dynamicForm.json').subscribe((data: any) => {
      this.settingForm = data.data.settingForm;
      this.settingFieldComponents = data.data.settingFieldComponents;
      this.createFormControls();
    });
    this.http.get('../../assets/output dynamic form.json').subscribe((data: any) => {
    });
  }

  getElementType(componentId: string): string | undefined {
    const fieldComponent = this.settingFieldComponents.find(
      (component: any) => component.component === componentId
    );
  
    return fieldComponent?.settings?.form?.formElementType;
  }

  getActionId(actionName: string): string | undefined {
    const action = this.settingForm.settings.actionLayout.bottom.find(
      (bottomAction: any) => bottomAction.name === actionName
    );
  
    return action?.id;
  }

  onAction(action: any) {
    if (action.name === 'Close') {
      this.closeButton();
    } else {
      this.saveButton();
    }
  }

  closeButton() {
    console.log('close');
  }

  saveButton() {
    console.log('save');
    const dynamicFormData: KeyValuePair<any> = {};
    const saveActionId = this.getActionId('Save');
    Object.keys(this.form.controls).forEach((key) => {
      if (this.form.get(key)?.value) {
        dynamicFormData[key] = this.form.get(key)?.value;
      }
    });
    
    // Object.keys(this.form.controls).forEach(key => {
    //   dynamicFormData[key] = this.form.get(key)!.value;
    // });
    const myDynamicForm: DynamicForm = {
      tableId: this.settingForm.tableId,
      tableName: this.settingForm.tableName,
      data: dynamicFormData,
      formId: this.settingForm.id,
      actionId: saveActionId,
    };
    console.log(myDynamicForm); 
    // console.log(this.dynamicService.create(myDynamicForm, '', 'CREATE'));
  }


  getValuesForComponent(componentText: string) {
    return [];
  }
  private createFormControls() {
    // Loop through each row and column in the form layout
    for (let row of this.settingForm.settings.formLayout) {
      for (let column of row) {
        const componentId = column.component;
        // Add form control for each component
        this.form.addControl(componentId, this.fb.control(''));
      }
    }
  }
}
