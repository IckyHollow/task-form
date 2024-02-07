import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit{
  settingForm: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('../../assets/dynamicForm.json').subscribe((data: any) => {
      this.settingForm = data.data.settingForm;
    });
  }
}
