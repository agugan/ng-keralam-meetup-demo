import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountUpComponent } from './count-up.component';
import { CommonModule } from '@angular/common';
import { CountUpModule } from 'ngx-countup';

describe('CountUpComponent', () => {
  let component: CountUpComponent;
  let fixture: ComponentFixture<CountUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountUpComponent ],
      imports: [CommonModule, CountUpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
