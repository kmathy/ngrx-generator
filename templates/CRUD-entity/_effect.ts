import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { {{properCase name }}Service } from '{{position "services"}}/{{ kebabCase name }}.service';
import * as {{ camelCase name }}Actions from '{{position "actions"}}/{{ kebabCase name }}.actions';

@Injectable()
export class {{ properCase name }}Effects {
{{#ifIn 'GET' entityMethods }}  @Effect() load{{ properCase plural }}$;{{/ifIn}}
{{#ifIn 'CREATE' entityMethods }}  @Effect() add{{ properCase name }}$;{{/ifIn}}
{{#ifIn 'CREATE_MANY' entityMethods }}  @Effect() add{{ properCase plural }}$;{{/ifIn}}
{{#ifIn 'UPDATE' entityMethods }}  @Effect() update{{ properCase name }}$;{{/ifIn}}
{{#ifIn 'UPDATE_MANY' entityMethods }}  @Effect() update{{ properCase plural }}$;{{/ifIn}}
{{#ifIn 'DELETE' entityMethods }}  @Effect() delete{{ properCase name }}$;{{/ifIn}}
{{#ifIn 'DELETE_MANY' entityMethods }}  @Effect() delete{{ properCase plural }}$;{{/ifIn}}

  constructor(
    private {{ camelCase name }}Service: {{ properCase name }}Service,
    private actions$: Actions
  ) {
    {{#ifIn 'GET' entityMethods }}
    this.load{{ properCase plural }}$ = this.actions$
      .pipe(
        ofType({{ camelCase name }}Actions.LOAD_{{ constantCase plural }}),
        switchMap((state: {{ camelCase name }}Actions.Load{{ properCase plural }}Action) =>
        this.{{ camelCase name }}Service.load{{ properCase plural }}().pipe(
          // If successful, dispatch success action with result
          map(res => new {{ camelCase name }}Actions.Load{{ properCase plural }}SuccessAction(res)),
          // If request fails, dispatch failed action
          catchError((err: HttpErrorResponse) => observableOf(new {{ camelCase name }}Actions.Load{{ properCase plural }}FailAction(err)))
        )
      ));

    {{/ifIn}}
    {{#ifIn 'CREATE' entityMethods }}
    this.add{{ properCase name }}$ = this.actions$
      .pipe(
        ofType({{ camelCase name }}Actions.ADD_{{ constantCase name }}),
        switchMap((state: {{ camelCase name }}Actions.Add{{ properCase name }}Action) =>
        this.{{ camelCase name}}Service.add{{ properCase name }}(state.payload).pipe(
          map(res => new {{ camelCase name }}Actions.Add{{ properCase name }}SuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new {{ camelCase name }}Actions.Add{{ properCase name }}FailAction(err)))
        )
      ));

    {{/ifIn}}
    {{#ifIn 'CREATE_MANY' entityMethods }}
    this.add{{ properCase plural }}$ = this.actions$
      .pipe(
        ofType({{ camelCase name }}Actions.ADD_{{ constantCase plural }}),
        switchMap((state: {{ camelCase name }}Actions.Add{{ properCase plural }}Action) =>
        this.{{ camelCase name}}Service.add{{ properCase plural }}(state.payload).pipe(
          map(res => new {{ camelCase name }}Actions.Add{{ properCase plural }}SuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new {{ camelCase name }}Actions.Add{{ properCase plural }}FailAction(err)))
        )
      ));

    {{/ifIn}}
    {{#ifIn 'UPDATE' entityMethods }}
    this.update{{ properCase name }}$ = this.actions$
      .pipe(
        ofType({{ camelCase name }}Actions.UPDATE_{{ constantCase name }}),
        switchMap((state: {{ camelCase name }}Actions.Update{{ properCase name }}Action) =>
        this.{{ camelCase name }}Service.update{{ properCase name }}(state.payload).pipe(
          map(res => new {{ camelCase name }}Actions.Update{{ properCase name }}SuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new {{ camelCase name }}Actions.Update{{ properCase name }}FailAction(err)))
        )
      ));

    {{/ifIn}}
    {{#ifIn 'UPDATE_MANY' entityMethods }}
    this.update{{ properCase plural }}$ = this.actions$
      .pipe(
        ofType({{ camelCase name }}Actions.UPDATE_{{ constantCase plural }}),
        switchMap((state: {{ camelCase name }}Actions.Update{{ properCase plural }}Action) =>
        this.{{ camelCase name }}Service.update{{ properCase plural }}(state.payload).pipe(
          map(res => new {{ camelCase name }}Actions.Update{{ properCase plural }}SuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new {{ camelCase name }}Actions.Update{{ properCase plural }}FailAction(err)))
        )
      ));

    {{/ifIn}}
    {{#ifIn 'DELETE' entityMethods }}
    this.delete{{ properCase name }}$ = this.actions$
      .pipe(
        ofType({{ camelCase name }}Actions.DELETE_{{ constantCase name }}),
        switchMap((state: {{ camelCase name }}Actions.Delete{{ properCase name }}Action) =>
        this.{{ camelCase name }}Service.delete{{ properCase name }}(state.payload).pipe(
          map(res => new {{ camelCase name }}Actions.Delete{{ properCase name }}SuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new {{ camelCase name }}Actions.Delete{{ properCase name }}FailAction(err)))
        )
      ));

    {{/ifIn}}
    {{#ifIn 'DELETE' entityMethods }}
    this.delete{{ properCase plural }}$ = this.actions$
      .pipe(
        ofType({{ camelCase name }}Actions.DELETE_{{ constantCase plural }}),
        switchMap((state: {{ camelCase name }}Actions.Delete{{ properCase plural }}Action) =>
        this.{{ camelCase name }}Service.delete{{ properCase plural }}(state.payload).pipe(
          map(res => new {{ camelCase name }}Actions.Delete{{ properCase plural }}SuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new {{ camelCase name }}Actions.Delete{{ properCase plural }}FailAction(err)))
        )
      ));
    {{/ifIn}}
  }

}
