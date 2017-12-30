import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { {{properCase name }}Service } from '{{position "services"}}/{{ kebabCase name }}.service';
import * as {{ camelCase name }}Actions from '{{position "actions"}}/{{ kebabCase name }}.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class {{ properCase name }}Effects {
  @Effect() load{{ titleCase name }}s$;
  @Effect() add{{ titleCase name }}$;
  @Effect() add{{ titleCase name }}s$;
  @Effect() update{{ titleCase name }}$;
  @Effect() update{{ titleCase name }}s$;
  @Effect() delete{{ titleCase name }}$;
  @Effect() delete{{ titleCase name }}s$;
  @Effect() clear{{ titleCase name }}s$;
  
  constructor(
    private {{ camelCase name }}Service: {{ properCase name }}Service,
    private actions$: Actions
  ) {
    this.load{{ titleCase name }}s$ = this.actions$
      .ofType({{ camelCase name }}Actions.LOAD_{{ constantCase name }}S)
      .switchMap((state: {{ camelCase name }}Actions.Load{{ titleCase name }}sAction) => this.{{ camelCase name }}Service.load{{ titleCase name }}s()
        // If successful, dispatch success action with result
        .map(res => new {{ camelCase name }}Actions.Load{{ titleCase name }}sSuccessAction(res))
        // If request fails, dispatch failed action
        .catch((err: HttpErrorResponse) => Observable.of(new {{ camelCase name }}Actions.Load{{ titleCase name }}sFailAction(err)))
      );

    this.add{{ titleCase name }}$ = this.actions$
      .ofType({{ camelCase name }}Actions.ADD_{{ constantCase name }})
      .switchMap((state: {{ camelCase name }}Actions.Add{{ titleCase name }}Action) => this.{{ camelCase name}}Service.add{{ titleCase name }}(state.payload)
        .map(res => new {{ camelCase name }}Actions.Add{{ titleCase name }}SuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new {{ camelCase name }}Actions.Add{{ titleCase name }}FailAction(err)))
      );

    this.add{{ titleCase name }}s$ = this.actions$
      .ofType({{ camelCase name }}Actions.ADD_{{ constantCase name }}S)
      .switchMap((state: {{ camelCase name }}Actions.Add{{ titleCase name }}sAction) => this.{{ camelCase name}}Service.add{{ titleCase name }}s(state.payload)
        .map(res => new {{ camelCase name }}Actions.Add{{ titleCase name }}sSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new {{ camelCase name }}Actions.Add{{ titleCase name }}sFailAction(err)))
      );

    this.update{{ titleCase name }}$ = this.actions$
      .ofType({{ camelCase name }}Actions.UPDATE_{{ constantCase name }})
      .switchMap((state: {{ camelCase name }}Actions.Update{{ titleCase name }}Action) => this.{{ camelCase name }}Service.update{{ titleCase name }}(state.payload)
        .map(res => new {{ camelCase name }}Actions.Update{{ titleCase name }}SuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new {{ camelCase name }}Actions.Update{{ titleCase name }}FailAction(err)))
      );

    this.update{{ titleCase name }}s$ = this.actions$
      .ofType({{ camelCase name }}Actions.UPDATE_{{ constantCase name }}S)
      .switchMap((state: {{ camelCase name }}Actions.Update{{ titleCase name }}sAction) => this.{{ camelCase name }}Service.update{{ titleCase name }}s(state.payload)
        .map(res => new {{ camelCase name }}Actions.Update{{ titleCase name }}sSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new {{ camelCase name }}Actions.Update{{ titleCase name }}sFailAction(err)))
      );

    this.delete{{ titleCase name }}$ = this.actions$
      .ofType({{ camelCase name }}Actions.DELETE_{{ constantCase name }})
      .switchMap((state: {{ camelCase name }}Actions.Delete{{ titleCase name }}Action) => this.{{ camelCase name }}Service.delete{{ titleCase name }}(state.payload)
        .map(res => new {{ camelCase name }}Actions.Delete{{ titleCase name }}SuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new {{ camelCase name }}Actions.Delete{{ titleCase name }}FailAction(err)))
      );

    this.delete{{ titleCase name }}s$ = this.actions$
      .ofType({{ camelCase name }}Actions.DELETE_{{ constantCase name }}S)
      .switchMap((state: {{ camelCase name }}Actions.Delete{{ titleCase name }}sAction) => this.{{ camelCase name }}Service.delete{{ titleCase name }}s(state.payload)
        .map(res => new {{ camelCase name }}Actions.Delete{{ titleCase name }}sSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new {{ camelCase name }}Actions.Delete{{ titleCase name }}sFailAction(err)))
      );

    this.clear{{ titleCase name }}s$ = this.actions$
      .ofType({{ camelCase name }}Actions.CLEAR_{{ constantCase name }}S)
      .switchMap((state: {{ camelCase name }}Actions.Clear{{ titleCase name }}sAction) => this.{{ camelCase name }}Service.clear{{ titleCase name }}s(state.payload)
        .map(res => new {{ camelCase name }}Actions.Clear{{ titleCase name }}sSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new {{ camelCase name }}Actions.Clear{{ titleCase name }}sFailAction(err)))
      );
  }

}
