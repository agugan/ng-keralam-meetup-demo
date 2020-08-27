import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { Book } from '../app.model';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  private booksApiUrl = "/api/books";
  public book: Book;
  public loaded: boolean = false;

  constructor(private route: ActivatedRoute, private location: Location, private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
      this.http.get<Book>(`${this.booksApiUrl}/${id}`).subscribe(val => {
        this.book = val;
      this.loaded = true;
    });
    
  }

  public onSubmit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.http.put(`${this.booksApiUrl}`, this.book).pipe(tap(val => {
      this.goBack();
    })).subscribe();
  }

  private goBack(){
      this.location.back()
  }

}
