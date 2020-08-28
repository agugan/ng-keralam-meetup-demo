import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailComponent } from './book-detail.component';
import { CommonModule, Location } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { Book } from '../app.model';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('BookDetailComponent', () => {

  test('should return back to dashboard on click', () => {
    const {fixture} = setUp();
    const location = TestBed.inject(Location);

    fixture.detectChanges();
    
    const locationSpy = spyOn(location, 'back');

    const btn = fixture.debugElement.query(By.css('.bk-dashboard'));
    btn.triggerEventHandler('click', null);

    expect(locationSpy).toHaveBeenCalled();
  });

  test('should return the book for the id selected on init', () => {
    const {fixture, component} = setUp();
    const httpTestingController = TestBed.inject(HttpTestingController);
    const testData = getBookTestData();

    fixture.detectChanges();
    
    expect(component.loaded).toBeFalsy();

    const req = httpTestingController.expectOne('/api/books/1');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();

    expect(component.book).toBe(testData);
    expect(component.loaded).toBeTruthy();
  });
  test('should save the the nw book data to the db', () => {
    const {component} = setUp();
    const httpTestingController = TestBed.inject(HttpTestingController);
    const location = TestBed.inject(Location);

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

function setUp(){

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

    const fixture: ComponentFixture<BookDetailComponent> = TestBed.createComponent(BookDetailComponent);
    const component: BookDetailComponent = fixture.componentInstance;
return {fixture, component};
}

function getBookTestData(){
 const book = {
    id: "1",
    name: "AA",
    author: "BB",
    publishedOn: "20-04-1997",
    quantityAvailable: 10
  };
  return book;
}
