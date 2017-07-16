import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  stars: boolean[] = [];

  @Input()
  rating: number = 0;

  constructor() {
  }

  ngOnInit() {
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i >this.rating);
    }
  }

}