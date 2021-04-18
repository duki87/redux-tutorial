import { ActionReducer, Action, State } from '@ngrx/store';
import { AmountActionTypes, AmountChangeAction } from '../actions/amount.action';
import { AmountState, initialAmountState } from '../states/amount.state';

export function amountReducer(
    state: AmountState = initialAmountState, 
    action: AmountChangeAction
) {
    switch(action.type) {
        case AmountActionTypes.AMOUNTCHANGE:
            return { amount: action.payload };
            break;
        default:
            return state;
    }
}