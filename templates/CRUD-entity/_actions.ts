import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Generate constants based on the given name
 * e.g export const LOAD_USERS = '[Auth] Load USERS'
 */

export const LOAD_{{ constantCase name }}S =                 '[{{ titleCase name }}] Load {{ titleCase name }}s';
export const LOAD_{{ constantCase name }}S_SUCCESS =         '[{{ titleCase name }}] Load {{ titleCase name }}s Success';
export const LOAD_{{ constantCase name }}S_FAIL =            '[{{ titleCase name }}] Load {{ titleCase name }}s Fail';

export const ADD_{{ constantCase name }} =              '[{{ titleCase name }}] Add {{ titleCase name }}';
export const ADD_{{ constantCase name }}_SUCCESS =      '[{{ titleCase name }}] Add {{ titleCase name }} Success';
export const ADD_{{ constantCase name }}_FAIL =         '[{{ titleCase name }}] Add {{ titleCase name }} Fail';

export const ADD_{{ constantCase name }}S =              '[{{ titleCase name }}] Add {{ titleCase name }}s';
export const ADD_{{ constantCase name }}S_SUCCESS =      '[{{ titleCase name }}] Add {{ titleCase name }}s Success';
export const ADD_{{ constantCase name }}S_FAIL =         '[{{ titleCase name }}] Add {{ titleCase name }}s Fail';

export const UPDATE_{{ constantCase name }} =              '[{{ titleCase name }}] Update {{ titleCase name }}';
export const UPDATE_{{ constantCase name }}_SUCCESS =      '[{{ titleCase name }}] Update {{ titleCase name }} Success';
export const UPDATE_{{ constantCase name }}_FAIL =         '[{{ titleCase name }}] Update {{ titleCase name }} Fail';

export const UPDATE_{{ constantCase name }}S =              '[{{ titleCase name }}] Update {{ titleCase name }}s';
export const UPDATE_{{ constantCase name }}S_SUCCESS =      '[{{ titleCase name }}] Update {{ titleCase name }}s Success';
export const UPDATE_{{ constantCase name }}S_FAIL =         '[{{ titleCase name }}] Update {{ titleCase name }}s Fail';

export const DELETE_{{ constantCase name }} =              '[{{ titleCase name }}] Delete {{ titleCase name }}';
export const DELETE_{{ constantCase name }}_SUCCESS =      '[{{ titleCase name }}] Delete {{ titleCase name }} Success';
export const DELETE_{{ constantCase name }}_FAIL =         '[{{ titleCase name }}] Delete {{ titleCase name }} Fail';

export const DELETE_{{ constantCase name }}S =              '[{{ titleCase name }}] Delete {{ titleCase name }}s';
export const DELETE_{{ constantCase name }}S_SUCCESS =      '[{{ titleCase name }}] Delete {{ titleCase name }}s Success';
export const DELETE_{{ constantCase name }}S_FAIL =         '[{{ titleCase name }}] Delete {{ titleCase name }}s Fail';

export const CLEAR_{{ constantCase name }}S =              '[{{ titleCase name }}] Clear {{ titleCase name }}s';
export const CLEAR_{{ constantCase name }}S_SUCCESS =      '[{{ titleCase name }}] Clear {{ titleCase name }}s Success';
export const CLEAR_{{ constantCase name }}S_FAIL =         '[{{ titleCase name }}] Clear {{ titleCase name }}s Fail';

/**
 * Load {{ titleCase name }}s Actions
 * e.g LoadAuthAction
 */
export class Load{{ titleCase name }}sAction implements Action {
  readonly type = LOAD_{{ constantCase name }}S;

  constructor(public payload: any) { }
}

export class Load{{ titleCase name }}sSuccessAction implements Action {
  readonly type = LOAD_{{ constantCase name }}S_SUCCESS;

  constructor(public payload: any) { }
}

export class Load{{ titleCase name }}sFailAction implements Action {
  readonly type = LOAD_{{ constantCase name }}S_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Add {{ titleCase name }} Actions
 */
export class Add{{ titleCase name }}Action implements Action {
  readonly type = ADD_{{ constantCase name }};

  constructor(public payload: any) { }
}

export class Add{{ titleCase name }}SuccessAction implements Action {
  readonly type = ADD_{{ constantCase name }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Add{{ titleCase name }}FailAction implements Action {
  readonly type = ADD_{{ constantCase name }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Add {{ titleCase name }}s Actions
 */
export class Add{{ titleCase name }}sAction implements Action {
  readonly type = ADD_{{ constantCase name }}S;

  constructor(public payload: any) { }
}

export class Add{{ titleCase name }}sSuccessAction implements Action {
  readonly type = ADD_{{ constantCase name }}S_SUCCESS;

  constructor(public payload: any) { }
}

export class Add{{ titleCase name }}sFailAction implements Action {
  readonly type = ADD_{{ constantCase name }}S_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Update {{ titleCase name }} Actions
 */
export class Update{{ titleCase name }}Action implements Action {
  readonly type = UPDATE_{{ constantCase name }};

  constructor(public payload: any) { }
}

export class Update{{ titleCase name }}SuccessAction implements Action {
  readonly type = UPDATE_{{ constantCase name }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Update{{ titleCase name }}FailAction implements Action {
  readonly type = UPDATE_{{ constantCase name }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Update {{ titleCase name }}s Actions
 */
export class Update{{ titleCase name }}sAction implements Action {
  readonly type = UPDATE_{{ constantCase name }}S;

  constructor(public payload: any) { }
}

export class Update{{ titleCase name }}sSuccessAction implements Action {
  readonly type = UPDATE_{{ constantCase name }}S_SUCCESS;

  constructor(public payload: any) { }
}

export class Update{{ titleCase name }}sFailAction implements Action {
  readonly type = UPDATE_{{ constantCase name }}S_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Delete {{ titleCase name }} Actions
 */
export class Delete{{ titleCase name }}Action implements Action {
  readonly type = DELETE_{{ constantCase name }};

  constructor(public payload: any) { }
}

export class Delete{{ titleCase name }}SuccessAction implements Action {
  readonly type = DELETE_{{ constantCase name }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Delete{{ titleCase name }}FailAction implements Action {
  readonly type = DELETE_{{ constantCase name }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Delete {{ titleCase name }}s Actions
 */
export class Delete{{ titleCase name }}sAction implements Action {
  readonly type = DELETE_{{ constantCase name }}S;

  constructor(public payload: any) { }
}

export class Delete{{ titleCase name }}sSuccessAction implements Action {
  readonly type = DELETE_{{ constantCase name }}S_SUCCESS;

  constructor(public payload: any) { }
}

export class Delete{{ titleCase name }}sFailAction implements Action {
  readonly type = DELETE_{{ constantCase name }}S_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Clear {{ titleCase name }}s Actions
 */
export class Clear{{ titleCase name }}sAction implements Action {
  readonly type = CLEAR_{{ constantCase name }}S;

  constructor(public payload: any) { }
}

export class Clear{{ titleCase name }}sSuccessAction implements Action {
  readonly type = CLEAR_{{ constantCase name }}S_SUCCESS;

  constructor(public payload: any) { }
}

export class Clear{{ titleCase name }}sFailAction implements Action {
  readonly type = CLEAR_{{ constantCase name }}S_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

export type Actions =
  | Load{{ titleCase name }}sAction
  | Load{{ titleCase name }}sSuccessAction
  | Load{{ titleCase name }}sFailAction
  | Add{{ titleCase name }}Action
  | Add{{ titleCase name }}FailAction
  | Add{{ titleCase name }}SuccessAction
  | Add{{ titleCase name }}sAction
  | Add{{ titleCase name }}sFailAction
  | Add{{ titleCase name }}sSuccessAction
  | Update{{ titleCase name }}Action
  | Update{{ titleCase name }}SuccessAction
  | Update{{ titleCase name }}FailAction
  | Update{{ titleCase name }}sAction
  | Update{{ titleCase name }}sSuccessAction
  | Update{{ titleCase name }}sFailAction
  | Delete{{ titleCase name }}Action
  | Delete{{ titleCase name }}SuccessAction
  | Delete{{ titleCase name }}FailAction
  | Delete{{ titleCase name }}sAction
  | Delete{{ titleCase name }}sSuccessAction
  | Delete{{ titleCase name }}sFailAction
  | Clear{{ titleCase name }}sAction
  | Clear{{ titleCase name }}sSuccessAction
  | Clear{{ titleCase name }}sFailAction;
