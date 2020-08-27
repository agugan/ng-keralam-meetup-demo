import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb(reqInfo?: RequestInfo): {} {
    const books = [
      {
        id: "1",
        name: "A",
        author:"B",
        publishedOn: "20-04-1997",
        quantityAvailable: 10
      },
      {
        id: "2",
        name: "A",
        author:"B",
        publishedOn: "20-04-1997",
        quantityAvailable: 10
      },
      {
        id: "3",
        name: "A",
        author:"B",
        publishedOn: "20-04-1997",
        quantityAvailable: 10
      },
      {
        id: "4",
        name: "A",
        author:"B",
        publishedOn: "20-04-1997",
        quantityAvailable: 10
      },
      {
        id: "5",
        name: "A",
        author:"B",
        publishedOn: "20-04-1997",
        quantityAvailable: 10
      },
      {
        id: "6",
        name: "A",
        author:"B",
        publishedOn: "20-04-1997",
        quantityAvailable: 10
      },
      {
        id: "7",
        name: "A",
        author:"B",
        publishedOn: "20-04-1997",
        quantityAvailable: 10
      }
    
    ]
    return { books}
  }
}
