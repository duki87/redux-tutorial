import { Currency } from "../models/currency.model";

export interface CurrencyState {
    currencies: Currency[];
}

export const initialCurrencyState: CurrencyState = {
    currencies: []
};

