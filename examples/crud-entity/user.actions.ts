import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Generate constants based on the given name
 * e.g export const LOAD_USERS = '[Auth] Load USERS'
 */

export const LOAD_USERS =                 '[User] Load Users';
export const LOAD_USERS_SUCCESS =         '[User] Load Users Success';
export const LOAD_USERS_FAIL =            '[User] Load Users Fail';

export const ADD_USER =              '[User] Add User';
export const ADD_USER_SUCCESS =      '[User] Add User Success';
export const ADD_USER_FAIL =         '[User] Add User Fail';

export const ADD_USERS =              '[User] Add Users';
export const ADD_USERS_SUCCESS =      '[User] Add Users Success';
export const ADD_USERS_FAIL =         '[User] Add Users Fail';

export const UPDATE_USER =              '[User] Update User';
export const UPDATE_USER_SUCCESS =      '[User] Update User Success';
export const UPDATE_USER_FAIL =         '[User] Update User Fail';

export const UPDATE_USERS =              '[User] Update Users';
export const UPDATE_USERS_SUCCESS =      '[User] Update Users Success';
export const UPDATE_USERS_FAIL =         '[User] Update Users Fail';

export const DELETE_USER =              '[User] Delete User';
export const DELETE_USER_SUCCESS =      '[User] Delete User Success';
export const DELETE_USER_FAIL =         '[User] Delete User Fail';

export const DELETE_USERS =              '[User] Delete Users';
export const DELETE_USERS_SUCCESS =      '[User] Delete Users Success';
export const DELETE_USERS_FAIL =         '[User] Delete Users Fail';

export const CLEAR_USERS =              '[User] Clear Users';
export const CLEAR_USERS_SUCCESS =      '[User] Clear Users Success';
export const CLEAR_USERS_FAIL =         '[User] Clear Users Fail';

/**
 * Load Users Actions
 * e.g LoadAuthAction
 */
export class LoadUsersAction implements Action {
  readonly type = LOAD_USERS;

  constructor(public payload: any) { }
}

export class LoadUsersSuccessAction implements Action {
  readonly type = LOAD_USERS_SUCCESS;

  constructor(public payload: any) { }
}

export class LoadUsersFailAction implements Action {
  readonly type = LOAD_USERS_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Add User Actions
 */
export class AddUserAction implements Action {
  readonly type = ADD_USER;

  constructor(public payload: any) { }
}

export class AddUserSuccessAction implements Action {
  readonly type = ADD_USER_SUCCESS;

  constructor(public payload: any) { }
}

export class AddUserFailAction implements Action {
  readonly type = ADD_USER_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Add Users Actions
 */
export class AddUsersAction implements Action {
  readonly type = ADD_USERS;

  constructor(public payload: any) { }
}

export class AddUsersSuccessAction implements Action {
  readonly type = ADD_USERS_SUCCESS;

  constructor(public payload: any) { }
}

export class AddUsersFailAction implements Action {
  readonly type = ADD_USERS_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Update User Actions
 */
export class UpdateUserAction implements Action {
  readonly type = UPDATE_USER;

  constructor(public payload: any) { }
}

export class UpdateUserSuccessAction implements Action {
  readonly type = UPDATE_USER_SUCCESS;

  constructor(public payload: any) { }
}

export class UpdateUserFailAction implements Action {
  readonly type = UPDATE_USER_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Update Users Actions
 */
export class UpdateUsersAction implements Action {
  readonly type = UPDATE_USERS;

  constructor(public payload: any) { }
}

export class UpdateUsersSuccessAction implements Action {
  readonly type = UPDATE_USERS_SUCCESS;

  constructor(public payload: any) { }
}

export class UpdateUsersFailAction implements Action {
  readonly type = UPDATE_USERS_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Delete User Actions
 */
export class DeleteUserAction implements Action {
  readonly type = DELETE_USER;

  constructor(public payload: any) { }
}

export class DeleteUserSuccessAction implements Action {
  readonly type = DELETE_USER_SUCCESS;

  constructor(public payload: any) { }
}

export class DeleteUserFailAction implements Action {
  readonly type = DELETE_USER_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Delete Users Actions
 */
export class DeleteUsersAction implements Action {
  readonly type = DELETE_USERS;

  constructor(public payload: any) { }
}

export class DeleteUsersSuccessAction implements Action {
  readonly type = DELETE_USERS_SUCCESS;

  constructor(public payload: any) { }
}

export class DeleteUsersFailAction implements Action {
  readonly type = DELETE_USERS_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Clear Users Actions
 */
export class ClearUsersAction implements Action {
  readonly type = CLEAR_USERS;

  constructor(public payload: any) { }
}

export class ClearUsersSuccessAction implements Action {
  readonly type = CLEAR_USERS_SUCCESS;

  constructor(public payload: any) { }
}

export class ClearUsersFailAction implements Action {
  readonly type = CLEAR_USERS_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

export type Actions =
  | LoadUsersAction
  | LoadUsersSuccessAction
  | LoadUsersFailAction
  | AddUserAction
  | AddUserFailAction
  | AddUserSuccessAction
  | AddUsersAction
  | AddUsersFailAction
  | AddUsersSuccessAction
  | UpdateUserAction
  | UpdateUserSuccessAction
  | UpdateUserFailAction
  | UpdateUsersAction
  | UpdateUsersSuccessAction
  | UpdateUsersFailAction
  | DeleteUserAction
  | DeleteUserSuccessAction
  | DeleteUserFailAction
  | DeleteUsersAction
  | DeleteUsersSuccessAction
  | DeleteUsersFailAction
  | ClearUsersAction
  | ClearUsersSuccessAction
  | ClearUsersFailAction;
