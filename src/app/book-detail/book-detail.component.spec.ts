import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailComponent } from './book-detail.component';
import { CommonModule, Location } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { Book } from '../app.model';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

fdescribe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [BookDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (id) => "1"
              }
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should return the book for the id selected on init', () => {
    fixture.detectChanges();
    const testData: Book = {
      id: "1",
      name: "A",
      author: "B",
      publishedOn: "20-04-1997",
      quantityAvailable: 10
    };
    expect(component.loaded).toBeFalse();

    const req = httpTestingController.expectOne('/api/books/1');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();

    expect(component.book).toBe(testData);
    expect(component.loaded).toBeTrue();
  });
  it('should save the the nw book data to the db', () => {
    let location = TestBed.inject(Location);
    component.book = {
      id: "1",
      name: "AA",
      author: "BB",
      publishedOn: "20-04-1997",
      quantityAvailable: 10
    };
    component.onSubmit();
    const locationSpy = spyOn(location, 'back');
    const req = httpTestingController.expectOne('/api/books');
    expect(req.request.method).toEqual('PUT');
    req.flush({});
    httpTestingController.verify();
    expect(locationSpy).toHaveBeenCalled();
  })
});
