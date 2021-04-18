import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { CurrenciesUpdatedAction, CurrencyActionTypes } from '../actions/currency.action';
import { CurrencyService } from '../services/currency.service';

@Injectable()
export class CurrencyEffects {

    constructor(private actions$: Actions, private _currencyService: CurrencyService) {}

    update$: Observable<Action> = createEffect(
        () => this.actions$.pipe(
            ofType(CurrencyActionTypes.CURRENCIESUPDATE),
            switchMap(() => {
                return this._currencyService.getRates()
                .pipe(
                    map(data => new CurrenciesUpdatedAction(data)) 
                )
            })
        )
    )  
}