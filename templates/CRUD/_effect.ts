import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of as observableOf } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { HttpErrorResponse } from '@angular/common/http';
import { {{properCase name }}Service } from '{{position "services"}}/{{ kebabCase name }}.service';
import * as {{ camelCase name }}Actions from '{{position "actions"}}/{{ kebabCase name }}.actions';

@Injectable()
export class {{ properCase name }}Effects {
  {{#each crudMethods }}
  @Effect() {{ lowerCase this }}$;
  {{/each}}
  
  constructor(
    private {{ camelCase name }}Service: {{ properCase name }}Service,
    private actions$: Actions
  ) {
    {{#each crudMethods}}
    this.{{ lowerCase this }}$ = this.actions$
      .ofType({{ camelCase ../name }}Actions.{{this}}_{{ constantCase ../name }})
      .pipe(switchMap((state: {{ camelCase ../name }}Actions.{{ properCase this }}{{ properCase ../name }}Action) =>
        this.{{ camelCase ../name }}Service.{{ lowerCase this }}{{ properCase ../name }}({{#isNotEqual this 'GET' }}state.payload{{/isNotEqual}}).pipe(
          // If successful, dispatch success action with result
          map(res => new {{ camelCase ../name }}Actions.{{ properCase this }}{{ properCase ../name }}SuccessAction(res)),
          // If request fails, dispatch failed action
          catchError((err: HttpErrorResponse) => observableOf(new {{ camelCase ../name }}Actions.{{ properCase this }}{{ properCase ../name }}FailAction(err)))
        )
      ));
    {{/each}}
  }

}
