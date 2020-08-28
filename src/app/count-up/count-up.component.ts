import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-up',
  templateUrl: './count-up.component.html',
  styleUrls: ['./count-up.component.scss']
})
export class CountUpComponent implements OnInit {
  public isCompleted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onComplete(){
      this.isCompleted = true;
  }
}
