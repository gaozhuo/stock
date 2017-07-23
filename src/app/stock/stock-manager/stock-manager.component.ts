import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Stock} from "../stock";
import {StockService} from "../stock.service";

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {
  stocks: Stock[];

  constructor(private router: Router, private stockService: StockService) {
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


