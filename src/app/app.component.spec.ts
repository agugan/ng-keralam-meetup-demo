import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  it('should create the app', () => {
    const {app} = setUp();
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-keralam-meetup-demo'`, () => {
    const {app} = setUp();
    expect(app.title).toEqual('ng-keralam-meetup-demo');
  });
});

function setUp(){
  TestBed.configureTestingModule({
    imports: [
      RouterTestingModule
    ],
    declarations: [
      AppComponent
    ],
  }).compileComponents();

  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;

  return { fixture, app};
}
