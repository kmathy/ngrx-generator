import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of as observableOf } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { HttpErrorResponse } from '@angular/common/http';
import { CrudService } from './crud.service';
import * as crudActions from './crud.actions';

@Injectable()
export class CrudEffects {
  @Effect() get$;
  @Effect() create$;
  @Effect() update$;
  @Effect() delete$;
  
  constructor(
    private crudService: CrudService,
    private actions$: Actions
  ) {
    this.get$ = this.actions$
      .ofType(crudActions.GET_CRUD)
      .pipe(switchMap((state: crudActions.GetCrudAction) =>
        this.crudService.getCrud().pipe(
          // If successful, dispatch success action with result
          map(res => new crudActions.GetCrudSuccessAction(res)),
          // If request fails, dispatch failed action
          catchError((err: HttpErrorResponse) => observableOf(new crudActions.GetCrudFailAction(err)))
        )
      ));
    this.create$ = this.actions$
      .ofType(crudActions.CREATE_CRUD)
      .pipe(switchMap((state: crudActions.CreateCrudAction) =>
        this.crudService.createCrud(state.payload).pipe(
          // If successful, dispatch success action with result
          map(res => new crudActions.CreateCrudSuccessAction(res)),
          // If request fails, dispatch failed action
          catchError((err: HttpErrorResponse) => observableOf(new crudActions.CreateCrudFailAction(err)))
        )
      ));
    this.update$ = this.actions$
      .ofType(crudActions.UPDATE_CRUD)
      .pipe(switchMap((state: crudActions.UpdateCrudAction) =>
        this.crudService.updateCrud(state.payload).pipe(
          // If successful, dispatch success action with result
          map(res => new crudActions.UpdateCrudSuccessAction(res)),
          // If request fails, dispatch failed action
          catchError((err: HttpErrorResponse) => observableOf(new crudActions.UpdateCrudFailAction(err)))
        )
      ));
    this.delete$ = this.actions$
      .ofType(crudActions.DELETE_CRUD)
      .pipe(switchMap((state: crudActions.DeleteCrudAction) =>
        this.crudService.deleteCrud(state.payload).pipe(
          // If successful, dispatch success action with result
          map(res => new crudActions.DeleteCrudSuccessAction(res)),
          // If request fails, dispatch failed action
          catchError((err: HttpErrorResponse) => observableOf(new crudActions.DeleteCrudFailAction(err)))
        )
      ));
  }

}
