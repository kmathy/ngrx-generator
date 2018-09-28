import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { {{properCase name }}Service } from '{{position "services"}}/{{ kebabCase name }}.service';
import * as {{ camelCase name }}Actions from '{{position "actions"}}/{{ kebabCase name }}.actions';

@Injectable()
export class {{ properCase name }}Effects {
  @Effect() load{{ properCase name }}$;
  
  constructor(
    private {{ camelCase name }}Service: {{ properCase name }}Service,
    private actions$: Actions
  ) {
    this.load{{ properCase name }}$ = this.actions$
      .pipe(
        ofType({{ camelCase name }}Actions.LOAD_{{ constantCase name }}),
        switchMap((state: {{ camelCase name }}Actions.Load{{ properCase name }}Action) => 
        this.{{ camelCase name }}Service.load{{ properCase name }}().pipe(
          // If successful, dispatch success action with result
          map(res => new {{ camelCase name }}Actions.Load{{ properCase name }}SuccessAction(res)),
          // If request fails, dispatch failed action
          catchError((err: Error) => observableOf(new {{ camelCase name }}Actions.Load{{ properCase name }}FailAction(err)))
        )
      )
      );
  }

}
