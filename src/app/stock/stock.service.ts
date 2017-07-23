import {Injectable} from '@angular/core';
import {Stock} from "./stock";

@Injectable()
export class StockService {
  private stocks: Stock[] = [
    new Stock(1, "东方网络", 13.27, 3, "东方网络股票详情", ["IT", "互联网"]),
    new Stock(2, "天齐锂业", 62.90, 5, "天齐锂业股票详情", ["有色金属"]),
    new Stock(3, "厦门钨业", 26.44, 3, "厦门钨业股票详情", ["有色金属"]),
    new Stock(4, "巨人网络", 45.61, 2, "巨人网络股票详情", ["IT", "互联网", "软件"]),
    new Stock(5, "贵州茅台", 456.41, 3, "贵州茅台股票详情", ["酒", "饮料"]),
    new Stock(6, "白色有银", 9.00, 1, "白色有银股票详情", ["矿", "有色金属"]),
    new Stock(7, "高能环境", 14.89, 3, "高能环境股票详情", ["生态环境"]),
    new Stock(8, "伊利股份", 20.90, 5, "伊利股份股票详情", ["农副食品"]),
  ];

  constructor() {
  }

  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(id: number): Stock {
    if (id != 0) {
      return this.stocks.find(stock => stock.id == id);
    } else {
      new Stock(0, "", 0, 0, "", []);
    }
  }

}

