import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CountUpModule } from 'ngx-countup';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CountUpComponent } from './count-up/count-up.component';


const routes: Route[] = [
  {
    path:'',
    component: DashboardComponent,
    
  },
  {
    path: 'edit/:id',
    component: BookDetailComponent
    
  },
  {
    path: 'count-up',
    component: CountUpComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookDetailComponent,
    CountUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: false}),
    FormsModule,
    HttpClientModule,
    CountUpModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false, delay: 100}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
