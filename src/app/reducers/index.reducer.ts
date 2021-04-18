import { ActionReducerMap } from '@ngrx/store';
import { amountReducer } from './amount.reducer';
import { currencyReducer } from './currency.reducer';
import { AppState } from '../states/app.state';

export const reducers: ActionReducerMap<AppState, any> = {
    amount: amountReducer,
    currencies: currencyReducer
}