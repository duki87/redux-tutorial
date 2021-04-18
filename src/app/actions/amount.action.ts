import { Action } from "@ngrx/store";

export enum AmountActionTypes {
    AMOUNTCHANGE = '[Amount] Change',
}

export class AmountChangeAction implements Action {
    type = AmountActionTypes.AMOUNTCHANGE;

    constructor(public payload: number) {}
}