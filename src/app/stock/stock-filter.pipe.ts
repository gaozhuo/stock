import {Pipe, PipeTransform} from '@angular/core';
import {Stock} from "./stock";

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(stocks: Stock[], property: string, keywords: string): any {
    if (!property || !keywords) {
      return stocks;
    }

    return stocks.filter(stock => {
      let prop = stock[property].toLowerCase();
      return prop.indexOf(keywords.toLowerCase()) >= 0;
    })
  }
}
