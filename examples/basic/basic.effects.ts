import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { switchMap,map,catchError } from 'rxjs/operators';
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
      .pipe(
        ofType(basicActions.LOAD_BASIC),
        switchMap((state: basicActions.LoadBasicAction) => 
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
