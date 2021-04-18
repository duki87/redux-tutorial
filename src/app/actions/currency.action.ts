import { Action } from "@ngrx/store";
import { Currency } from "../models/currency.model";

export enum CurrencyActionTypes {
    CURRENCIESUPDATE = '[Currency] UpdateAll',
    CURRENCIESUPDATED = '[Currency] UpdatedAll'
}

export class CurrenciesUpdateAction implements Action {
    type = CurrencyActionTypes.CURRENCIESUPDATE;
}

export class CurrenciesUpdatedAction implements Action {
    type = CurrencyActionTypes.CURRENCIESUPDATED;

    constructor(public payload: Currency[]) {}
}