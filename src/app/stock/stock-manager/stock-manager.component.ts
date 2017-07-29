import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Stock} from "../stock";
import {StockService} from "../stock.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {
  stocks: Stock[];
  nameFilter: FormControl = new FormControl();
  keywords: string;

  constructor(private router: Router, private stockService: StockService) {
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(name => this.keywords = name);
  }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
  }

  create() {
    this.router.navigateByUrl("form/0");
  }

  update(stock: Stock) {
    this.router.navigateByUrl("form/" + stock.id);
  }
}


