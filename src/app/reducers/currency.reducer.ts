import { ActionReducer, Action } from '@ngrx/store';
import * as currency from '../actions/currency.action';

export function currencyReducer(state = [], action: currency.CurrenciesUpdatedAction) {
    switch(action.type) {
        case currency.CURRENCIESUPDATED:
            return action.payload;
        default:
            return state;
    }
}