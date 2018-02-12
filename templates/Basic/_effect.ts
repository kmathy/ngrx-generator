import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of as observableOf } from 'rxjs/observabe/of';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { catch } from 'rxjs/operators/catch';
import { {{properCase name }}Service } from '{{position "services"}}/{{ kebabCase name }}.service';
import * as {{ camelCase name }}Actions from '{{position "actions"}}/{{ kebabCase name }}.actions';

@Injectable()
export class {{ properCase name }}Effects {
  @Effect() load{{ titleCase name }}$;
  
  constructor(
    private {{ camelCase name }}Service: {{ properCase name }}Service,
    private actions$: Actions
  ) {
    this.load{{ titleCase name }}$ = this.actions$
      .ofType({{ camelCase name }}Actions.LOAD_{{ constantCase name }})
      .switchMap((state: {{ camelCase name }}Actions.Load{{ titleCase name }}Action) => this.{{ camelCase name }}Service.load{{ titleCase name }}()
        // If successful, dispatch success action with result
        .map(res => new {{ camelCase name }}Actions.Load{{ titleCase name }}SuccessAction(res))
        // If request fails, dispatch failed action
        .catch((err: Error) => observableOf(new {{ camelCase name }}Actions.Load{{ titleCase name }}FailAction(err)))
      );
  }

}
