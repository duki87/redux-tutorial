import { AmountState } from "./amount.state";
import { CurrencyState } from "./currency.state";

export interface AppState {
    amount: AmountState;
    currencies: CurrencyState;
}

export const getAmountState = (state: AppState) => state.amount.amount;
export const getCurrencyState = (state: AppState) => state.currencies.currencies;