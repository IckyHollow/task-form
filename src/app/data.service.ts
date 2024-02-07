import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'src\assets\dynamicForm.json';
  private apiUrl2 = 'src\assets\output dynamic form.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
    return this.http.get(this.apiUrl2);
  }
}
