import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'codeSnippetProject';

  codeSnippet = `fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));`;

apiResponse: any;

constructor(private http: HttpClient) {}

fetchData() {
  this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe(response => this.apiResponse = response);
}
}
