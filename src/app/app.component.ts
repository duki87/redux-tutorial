import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AmountChangeAction, CurrenciesUpdateAction } from './actions';
import { Currency } from './models/currency.model';
import { reducers } from './reducers/index.reducer';
import { getAmountState, getCurrencyState } from './states/app.state';
import { AppState } from './states/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'currency-redux';
  public amount$: Observable<number>;
  public currencyRates$: Observable<Currency[]>;

  constructor(public store: Store<AppState>) {
    this.amount$ = store.pipe(select(getAmountState));
    this.currencyRates$ = store.pipe(select(getCurrencyState));
  }

  ngOnInit() {
    this.store.dispatch(new CurrenciesUpdateAction());
  }

  onAmountChange(amount: string) {
    const amountToFloat = parseFloat(amount);
    if(!isNaN(amountToFloat)) {
      this.store.dispatch(new AmountChangeAction(amountToFloat));
    }
  }

  sum(amount: string, currency: number) {
    return (parseFloat(amount) * currency).toFixed(2);
  }
}
