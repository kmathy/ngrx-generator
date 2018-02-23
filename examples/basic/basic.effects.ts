import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of as observableOf } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { BasicService } from './basic.service';
import * as basicActions from './basic.actions';

@Injectable()
export class BasicEffects {
  @Effect() loadBasic$;
  
  constructor(
    private basicService: BasicService,
    private actions$: Actions
  ) {
    this.loadBasic$ = this.actions$
      .ofType(basicActions.LOAD_BASIC)
      .pipe(switchMap((state: basicActions.LoadBasicAction) => 
        this.basicService.loadBasic().pipe(
          // If successful, dispatch success action with result
          map(res => new basicActions.LoadBasicSuccessAction(res)),
          // If request fails, dispatch failed action
          catchError((err: Error) => observableOf(new basicActions.LoadBasicFailAction(err)))
        )
      )
      );
  }

}
