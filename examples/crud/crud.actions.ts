import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const GET_CRUD =                 '[Crud] Get Crud';
export const GET_CRUD_SUCCESS =         '[Crud] Get Crud Success';
export const GET_CRUD_FAIL =            '[Crud] Get Crud Fail';

export const CREATE_CRUD =                 '[Crud] Create Crud';
export const CREATE_CRUD_SUCCESS =         '[Crud] Create Crud Success';
export const CREATE_CRUD_FAIL =            '[Crud] Create Crud Fail';

export const UPDATE_CRUD =                 '[Crud] Update Crud';
export const UPDATE_CRUD_SUCCESS =         '[Crud] Update Crud Success';
export const UPDATE_CRUD_FAIL =            '[Crud] Update Crud Fail';

export const DELETE_CRUD =                 '[Crud] Delete Crud';
export const DELETE_CRUD_SUCCESS =         '[Crud] Delete Crud Success';
export const DELETE_CRUD_FAIL =            '[Crud] Delete Crud Fail';

/**
 * Get Crud Actions
 * e.g GetAuthAction
 */
export class GetCrudAction implements Action {
  readonly type = GET_CRUD;

  constructor(public payload: any) { }
}

export class GetCrudSuccessAction implements Action {
  readonly type = GET_CRUD_SUCCESS;

  constructor(public payload: any) { }
}

export class GetCrudFailAction implements Action {
  readonly type = GET_CRUD_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Create Crud Actions
 */
export class CreateCrudAction implements Action {
  readonly type = CREATE_CRUD;

  constructor(public payload: any) { }
}

export class CreateCrudSuccessAction implements Action {
  readonly type = CREATE_CRUD_SUCCESS;

  constructor(public payload: any) { }
}

export class CreateCrudFailAction implements Action {
  readonly type = CREATE_CRUD_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Update Crud Actions
 */
export class UpdateCrudAction implements Action {
  readonly type = UPDATE_CRUD;

  constructor(public payload: any) { }
}

export class UpdateCrudSuccessAction implements Action {
  readonly type = UPDATE_CRUD_SUCCESS;

  constructor(public payload: any) { }
}

export class UpdateCrudFailAction implements Action {
  readonly type = UPDATE_CRUD_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Delete Crud Actions
 */
export class DeleteCrudAction implements Action {
  readonly type = DELETE_CRUD;

  constructor(public payload: any) { }
}

export class DeleteCrudSuccessAction implements Action {
  readonly type = DELETE_CRUD_SUCCESS;

  constructor(public payload: any) { }
}

export class DeleteCrudFailAction implements Action {
  readonly type = DELETE_CRUD_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

export type Actions =
  | GetCrudAction
  | GetCrudSuccessAction
  | GetCrudFailAction
  | CreateCrudAction
  | CreateCrudSuccessAction
  | CreateCrudFailAction
  | UpdateCrudAction
  | UpdateCrudSuccessAction
  | UpdateCrudFailAction
  | DeleteCrudAction
  | DeleteCrudSuccessAction
  | DeleteCrudFailAction
;
