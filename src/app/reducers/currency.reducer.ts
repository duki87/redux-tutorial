import { ActionReducer, Action } from '@ngrx/store';
import { CurrencyActionTypes, CurrenciesUpdatedAction } from '../actions/currency.action';
import { CurrencyState, initialCurrencyState } from '../states/currency.state';

export function currencyReducer(state: CurrencyState = initialCurrencyState, action: CurrenciesUpdatedAction) {
    switch(action.type) {
        case CurrencyActionTypes.CURRENCIESUPDATED:
            //return action.payload;
            return { currencies: action.payload };
        default:
            return state;
    }
}