import { ActionReducer, Action, State } from '@ngrx/store';
import * as amount from '../actions/amount.action';

export function amountReducer(state: number = 1, action: amount.AmountChangeAction) {
    switch(action.type) {
        case amount.AMOUNTCHANGE:
            return action.payload;
        default:
            return state;
    }
}