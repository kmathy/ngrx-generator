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
  @Effect() load{{ titleCase plural }}$;
  @Effect() add{{ titleCase name }}$;
  @Effect() add{{ titleCase plural }}$;
  @Effect() update{{ titleCase name }}$;
  @Effect() update{{ titleCase plural }}$;
  @Effect() delete{{ titleCase name }}$;
  @Effect() delete{{ titleCase plural }}$;

  constructor(
    private {{ camelCase name }}Service: {{ properCase name }}Service,
    private actions$: Actions
  ) {
    this.load{{ titleCase plural }}$ = this.actions$
      .ofType({{ camelCase name }}Actions.LOAD_{{ constantCase plural }})
      .pipe(switchMap((state: {{ camelCase name }}Actions.Load{{ titleCase plural }}Action) =>
        this.{{ camelCase name }}Service.load{{ titleCase plural }}().pipe(
          // If successful, dispatch success action with result
          map(res => new {{ camelCase name }}Actions.Load{{ titleCase plural }}SuccessAction(res)),
          // If request fails, dispatch failed action
          catchError((err: HttpErrorResponse) => observableOf(new {{ camelCase name }}Actions.Load{{ titleCase plural }}FailAction(err)))
        )
      ));

    this.add{{ titleCase name }}$ = this.actions$
      .ofType({{ camelCase name }}Actions.ADD_{{ constantCase name }})
      .pipe(switchMap((state: {{ camelCase name }}Actions.Add{{ titleCase name }}Action) =>
        this.{{ camelCase name}}Service.add{{ titleCase name }}(state.payload).pipe(
          map(res => new {{ camelCase name }}Actions.Add{{ titleCase name }}SuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new {{ camelCase name }}Actions.Add{{ titleCase name }}FailAction(err)))
        )
      ));

    this.add{{ titleCase plural }}$ = this.actions$
      .ofType({{ camelCase name }}Actions.ADD_{{ constantCase plural }})
      .pipe(switchMap((state: {{ camelCase name }}Actions.Add{{ titleCase plural }}Action) =>
        this.{{ camelCase name}}Service.add{{ titleCase plural }}(state.payload).pipe(
          map(res => new {{ camelCase name }}Actions.Add{{ titleCase plural }}SuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new {{ camelCase name }}Actions.Add{{ titleCase plural }}FailAction(err)))
        )
      ));

    this.update{{ titleCase name }}$ = this.actions$
      .ofType({{ camelCase name }}Actions.UPDATE_{{ constantCase name }})
      .pipe(switchMap((state: {{ camelCase name }}Actions.Update{{ titleCase name }}Action) =>
        this.{{ camelCase name }}Service.update{{ titleCase name }}(state.payload).pipe(
          map(res => new {{ camelCase name }}Actions.Update{{ titleCase name }}SuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new {{ camelCase name }}Actions.Update{{ titleCase name }}FailAction(err)))
        )
      ));

    this.update{{ titleCase plural }}$ = this.actions$
      .ofType({{ camelCase name }}Actions.UPDATE_{{ constantCase plural }})
      .pipe(switchMap((state: {{ camelCase name }}Actions.Update{{ titleCase plural }}Action) =>
        this.{{ camelCase name }}Service.update{{ titleCase plural }}(state.payload).pipe(
          map(res => new {{ camelCase name }}Actions.Update{{ titleCase plural }}SuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new {{ camelCase name }}Actions.Update{{ titleCase plural }}FailAction(err)))
        )
      ));

    this.delete{{ titleCase name }}$ = this.actions$
      .ofType({{ camelCase name }}Actions.DELETE_{{ constantCase name }})
      .pipe(switchMap((state: {{ camelCase name }}Actions.Delete{{ titleCase name }}Action) =>
        this.{{ camelCase name }}Service.delete{{ titleCase name }}(state.payload).pipe(
          map(res => new {{ camelCase name }}Actions.Delete{{ titleCase name }}SuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new {{ camelCase name }}Actions.Delete{{ titleCase name }}FailAction(err)))
        )
      ));

    this.delete{{ titleCase plural }}$ = this.actions$
      .ofType({{ camelCase name }}Actions.DELETE_{{ constantCase plural }})
      .pipe(switchMap((state: {{ camelCase name }}Actions.Delete{{ titleCase plural }}Action) =>
        this.{{ camelCase name }}Service.delete{{ titleCase plural }}(state.payload).pipe(
          map(res => new {{ camelCase name }}Actions.Delete{{ titleCase plural }}SuccessAction(res)),
          catchError((err: HttpErrorResponse) => observableOf(new {{ camelCase name }}Actions.Delete{{ titleCase plural }}FailAction(err)))
        )
      ));
  }

}
