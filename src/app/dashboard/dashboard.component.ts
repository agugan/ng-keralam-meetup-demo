import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { Book } from '../app.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public books: Observable<Array<Book>>;
  public isLoaded: boolean = false;
  private booksApiUrl = "/api/books";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.books = this.http.get<Array<Book>>(this.booksApiUrl).pipe(tap(val => {
      this.isLoaded = true;
      return val;
    }));
  }

}
