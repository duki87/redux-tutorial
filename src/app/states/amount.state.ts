import { State } from "@ngrx/store";

export interface AmountState {
    amount: number;
}

export const initialAmountState: AmountState = {
    amount: 1
};