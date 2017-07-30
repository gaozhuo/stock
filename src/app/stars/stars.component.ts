import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  stars: boolean[] = [];

  @Input()
  rating: number = 0;

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  @Input()
  writable: boolean = false;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");

    //清空数组
    this.stars.splice(0, this.stars.length);

    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }

  }


  clickStar(index: number) {
    console.log("clickStar");
    if (this.writable) {
      this.rating = index + 1;

      this.ratingChange.emit(this.rating);
    }
  }

}
