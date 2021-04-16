import { Action, ActionReducerMap, State } from '@ngrx/store'
import { Currency } from '../models/currency.model'
import { amountReducer } from './amount.reducer'
import { currencyReducer } from './currency.reducer'

export interface AppState {
  amount: number;
  currencies: Currency[];
}

export const reducers: ActionReducerMap<AppState> = {
    amount: amountReducer,
    currencies: currencyReducer
}