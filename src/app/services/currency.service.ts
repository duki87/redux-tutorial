import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Currency } from '../models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private _http: HttpClient) { }

  getRates(): Observable<Currency[]> {
    return this._http.get<any>('http://api.exchangeratesapi.io/v1/latest?access_key=8273c61db45f7162b62a5101eaca999e&format=1')
      .pipe(
        map(result => {
          return Object.keys(result.rates).map((key, index) => {
            return { code: key, value: result.rates[key] }
          })
        })
      )
  }
}
