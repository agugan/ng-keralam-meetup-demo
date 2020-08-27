import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-keralam-meetup-demo';

  constructor(private http: HttpClient){
    this.http.get("/api/books").subscribe(val => console.log(val.toString()));
  }
}
