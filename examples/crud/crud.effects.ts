import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { CrudService } from './crud.service';
import * as crudActions from './crud.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
      .switchMap((state: crudActions.GetCrudAction) => this.crudService.getCrud()
        // If successful, dispatch success action with result
        .map(res => new crudActions.GetCrudSuccessAction(res))
        // If request fails, dispatch failed action
        .catch((err: HttpErrorResponse) => Observable.of(new crudActions.GetCrudFailAction(err)))
      );

    this.create$ = this.actions$
      .ofType(crudActions.CREATE_CRUD)
      .switchMap((state: crudActions.CreateCrudAction) => this.crudService.createCrud(state.payload)
        .map(res => new crudActions.CreateCrudSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new crudActions.CreateCrudFailAction(err)))
      );

    this.update$ = this.actions$
      .ofType(crudActions.UPDATE_CRUD)
      .switchMap((state: crudActions.UpdateCrudAction) => this.crudService.updateCrud(state.payload)
        .map(res => new crudActions.UpdateCrudSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new crudActions.UpdateCrudFailAction(err)))
      );

    this.delete$ = this.actions$
      .ofType(crudActions.DELETE_CRUD)
      .switchMap((state: crudActions.DeleteCrudAction) => this.crudService.deleteCrud(state.payload)
        .map(res => new crudActions.DeleteCrudSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new crudActions.DeleteCrudFailAction(err)))
      );
  }

}
