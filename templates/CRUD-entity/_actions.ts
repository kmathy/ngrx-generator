import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Generate constants based on the given name
 * e.g export const LOAD_USERS = '[Auth] Load USERS'
 */

export const LOAD_{{ constantCase plural }} =                 '[{{ titleCase plural }}] Load {{ titleCase plural }}';
export const LOAD_{{ constantCase plural }}_SUCCESS =         '[{{ titleCase plural }}] Load {{ titleCase plural }} Success';
export const LOAD_{{ constantCase plural }}_FAIL =            '[{{ titleCase plural }}] Load {{ titleCase plural }} Fail';

export const SELECT_{{ constantCase name }} = '[{{ titleCase name }}] Select {{ titleCase name }}';

export const ADD_{{ constantCase name }} =              '[{{ titleCase name }}] Add {{ titleCase name }}';
export const ADD_{{ constantCase name }}_SUCCESS =      '[{{ titleCase name }}] Add {{ titleCase name }} Success';
export const ADD_{{ constantCase name }}_FAIL =         '[{{ titleCase name }}] Add {{ titleCase name }} Fail';

export const ADD_{{ constantCase plural }} =              '[{{ titleCase plural }}] Add {{ titleCase plural }}';
export const ADD_{{ constantCase plural }}_SUCCESS =      '[{{ titleCase plural }}] Add {{ titleCase plural }} Success';
export const ADD_{{ constantCase plural }}_FAIL =         '[{{ titleCase plural }}] Add {{ titleCase plural }} Fail';

export const UPDATE_{{ constantCase name }} =              '[{{ titleCase name }}] Update {{ titleCase name }}';
export const UPDATE_{{ constantCase name }}_SUCCESS =      '[{{ titleCase name }}] Update {{ titleCase name }} Success';
export const UPDATE_{{ constantCase name }}_FAIL =         '[{{ titleCase name }}] Update {{ titleCase name }} Fail';

export const UPDATE_{{ constantCase plural }} =              '[{{ titleCase plural }}] Update {{ titleCase plural }}';
export const UPDATE_{{ constantCase plural }}_SUCCESS =      '[{{ titleCase plural }}] Update {{ titleCase plural }} Success';
export const UPDATE_{{ constantCase plural }}_FAIL =         '[{{ titleCase plural }}] Update {{ titleCase plural }} Fail';

export const DELETE_{{ constantCase name }} =              '[{{ titleCase name }}] Delete {{ titleCase name }}';
export const DELETE_{{ constantCase name }}_SUCCESS =      '[{{ titleCase name }}] Delete {{ titleCase name }} Success';
export const DELETE_{{ constantCase name }}_FAIL =         '[{{ titleCase name }}] Delete {{ titleCase name }} Fail';

export const DELETE_{{ constantCase plural }} =              '[{{ titleCase plural }}] Delete {{ titleCase plural }}';
export const DELETE_{{ constantCase plural }}_SUCCESS =      '[{{ titleCase plural }}] Delete {{ titleCase plural }} Success';
export const DELETE_{{ constantCase plural }}_FAIL =         '[{{ titleCase plural }}] Delete {{ titleCase plural }} Fail';

export const CLEAR_{{ constantCase plural }} =              '[{{ titleCase plural }}] Clear {{ titleCase plural }}';

/**
 * Load {{ titleCase plural }} Actions
 * e.g LoadUsersAction
 */
export class Load{{ titleCase plural }}Action implements Action {
  readonly type = LOAD_{{ constantCase plural }};

  constructor(public payload = '') { }
}

export class Load{{ titleCase plural }}SuccessAction implements Action {
  readonly type = LOAD_{{ constantCase plural }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Load{{ titleCase plural }}FailAction implements Action {
  readonly type = LOAD_{{ constantCase plural }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Select {{ titleCase name }} Action
 */

export class Select{{ titleCase name }}Action implements Action {
  readonly type = SELECT_{{ constantCase name }};
  constructor(public {{ camelCase name }}ID: string | number) {}
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
 * Add {{ titleCase plural }} Actions
 */
export class Add{{ titleCase plural }}Action implements Action {
  readonly type = ADD_{{ constantCase plural }};

  constructor(public payload: any) { }
}

export class Add{{ titleCase plural }}SuccessAction implements Action {
  readonly type = ADD_{{ constantCase plural }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Add{{ titleCase plural }}FailAction implements Action {
  readonly type = ADD_{{ constantCase plural }}_FAIL;

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
 * Update {{ titleCase plural }} Actions
 */
export class Update{{ titleCase plural }}Action implements Action {
  readonly type = UPDATE_{{ constantCase plural }};

  constructor(public payload: any) { }
}

export class Update{{ titleCase plural }}SuccessAction implements Action {
  readonly type = UPDATE_{{ constantCase plural }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Update{{ titleCase plural }}FailAction implements Action {
  readonly type = UPDATE_{{ constantCase plural }}_FAIL;

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
 * Delete {{ titleCase plural }} Actions
 */
export class Delete{{ titleCase plural }}Action implements Action {
  readonly type = DELETE_{{ constantCase plural }};

  constructor(public payload: any) { }
}

export class Delete{{ titleCase plural }}SuccessAction implements Action {
  readonly type = DELETE_{{ constantCase plural }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Delete{{ titleCase plural }}FailAction implements Action {
  readonly type = DELETE_{{ constantCase plural }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Clear {{ titleCase plural }} Actions
 */
export class Clear{{ titleCase plural }}Action implements Action {
  readonly type = CLEAR_{{ constantCase plural }};

  constructor(public payload: any) { }
}

export type Actions = Load{{ titleCase plural }}Action
  | Load{{ titleCase plural }}SuccessAction
  | Load{{ titleCase plural }}FailAction
  | Select{{ titleCase plural }}Action
  | Add{{ titleCase name }}Action
  | Add{{ titleCase name }}FailAction
  | Add{{ titleCase name }}SuccessAction
  | Add{{ titleCase plural }}Action
  | Add{{ titleCase plural }}FailAction
  | Add{{ titleCase plural }}SuccessAction
  | Update{{ titleCase name }}Action
  | Update{{ titleCase name }}SuccessAction
  | Update{{ titleCase name }}FailAction
  | Update{{ titleCase plural }}Action
  | Update{{ titleCase plural }}SuccessAction
  | Update{{ titleCase plural }}FailAction
  | Delete{{ titleCase name }}Action
  | Delete{{ titleCase name }}SuccessAction
  | Delete{{ titleCase name }}FailAction
  | Delete{{ titleCase plural }}Action
  | Delete{{ titleCase plural }}SuccessAction
  | Delete{{ titleCase plural }}FailAction
  | Clear{{ titleCase plural }}Action;
