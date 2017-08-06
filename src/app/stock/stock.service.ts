import {Injectable} from '@angular/core';
import {Stock} from "./stock";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

@Injectable()
export class StockService {


  constructor(private http: Http) {
  }

  getStocks(): Observable<Stock[]> {
    return this.http.get('/api/stock').map(res => res.json());
  }

  getStock(id: number): Observable<Stock> {
    return this.http.get('/api/stock/' + id).map(res => res.json());
  }

}

