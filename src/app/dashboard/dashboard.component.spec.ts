import { ComponentFixture, TestBed} from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { Book } from '../app.model';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { of } from 'rxjs';

test('it should retrieve the books collections and display in view', () => {

  const { fixture, component } = setUp();
  const httpTestingController = TestBed.inject(HttpTestingController);
  fixture.detectChanges();

  const testData: Array<Book> = getBooksTestData();
  const req = httpTestingController.expectOne('/api/books');
  expect(req.request.method).toEqual('GET');
  req.flush(testData);
  httpTestingController.verify();

  component.books.subscribe(books => {
    expect(component.books).toBe(testData);
  });

});

test('it should navigate on click of the rows in the book collections table', () => {
  const { fixture, component } =  setUp();
  const router = TestBed.inject(Router);
  const testData = getBooksTestData();

  fixture.detectChanges();
  component.books = of(testData);
  fixture.detectChanges();

  const routerSpy = spyOn(router, 'navigateByUrl');
  const bookRow = fixture.debugElement.queryAll(By.css('.book-row'));
  bookRow[1].triggerEventHandler('click', null);

  expect(routerSpy).toHaveBeenCalled();
});

function setUp() {
  TestBed.configureTestingModule({
    declarations: [DashboardComponent],
    imports: [HttpClientTestingModule, RouterTestingModule, CommonModule]
  }).compileComponents();

  const fixture: ComponentFixture<DashboardComponent> = TestBed.createComponent(DashboardComponent);
  const component: DashboardComponent = fixture.componentInstance;

  return { fixture, component }
}

function getBooksTestData() {
  const books = [
    {
      id: "1",
      name: "A",
      author: "B",
      publishedOn: "20-04-1997",
      quantityAvailable: 10
    },
    {
      id: "2",
      name: "A",
      author: "B",
      publishedOn: "20-04-1997",
      quantityAvailable: 10
    },
    {
      id: "3",
      name: "A",
      author: "B",
      publishedOn: "20-04-1997",
      quantityAvailable: 10
    },
    {
      id: "4",
      name: "A",
      author: "B",
      publishedOn: "20-04-1997",
      quantityAvailable: 10
    },
    {
      id: "5",
      name: "A",
      author: "B",
      publishedOn: "20-04-1997",
      quantityAvailable: 10
    },
    {
      id: "6",
      name: "A",
      author: "B",
      publishedOn: "20-04-1997",
      quantityAvailable: 10
    },
    {
      id: "7",
      name: "A",
      author: "B",
      publishedOn: "20-04-1997",
      quantityAvailable: 10
    }

  ];
  return books;
}
