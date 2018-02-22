import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Generate constants based on the given name
 * e.g export const LOAD_USERS = '[Auth] Load USERS'
 */

{{#ifIn 'GET' entityMethods }}
export const LOAD_{{ constantCase plural }} =                 '[{{ properCase plural }}] Load {{ properCase plural }}';
export const LOAD_{{ constantCase plural }}_SUCCESS =         '[{{ properCase plural }}] Load {{ properCase plural }} Success';
export const LOAD_{{ constantCase plural }}_FAIL =            '[{{ properCase plural }}] Load {{ properCase plural }} Fail';

{{/ifIn}}
export const SELECT_{{ constantCase name }} = '[{{ properCase name }}] Select {{ properCase name }}';

{{#ifIn 'CREATE' entityMethods }}
export const ADD_{{ constantCase name }} =              '[{{ properCase name }}] Add {{ properCase name }}';
export const ADD_{{ constantCase name }}_SUCCESS =      '[{{ properCase name }}] Add {{ properCase name }} Success';
export const ADD_{{ constantCase name }}_FAIL =         '[{{ properCase name }}] Add {{ properCase name }} Fail';

{{/ifIn}}
{{#ifIn 'CREATE_MANY' entityMethods }}
export const ADD_{{ constantCase plural }} =              '[{{ properCase plural }}] Add {{ properCase plural }}';
export const ADD_{{ constantCase plural }}_SUCCESS =      '[{{ properCase plural }}] Add {{ properCase plural }} Success';
export const ADD_{{ constantCase plural }}_FAIL =         '[{{ properCase plural }}] Add {{ properCase plural }} Fail';

{{/ifIn}}
{{#ifIn 'UPDATE' entityMethods }}
export const UPDATE_{{ constantCase name }} =              '[{{ properCase name }}] Update {{ properCase name }}';
export const UPDATE_{{ constantCase name }}_SUCCESS =      '[{{ properCase name }}] Update {{ properCase name }} Success';
export const UPDATE_{{ constantCase name }}_FAIL =         '[{{ properCase name }}] Update {{ properCase name }} Fail';

{{/ifIn}}
{{#ifIn 'UPDATE_MANY' entityMethods }}
export const UPDATE_{{ constantCase plural }} =              '[{{ properCase plural }}] Update {{ properCase plural }}';
export const UPDATE_{{ constantCase plural }}_SUCCESS =      '[{{ properCase plural }}] Update {{ properCase plural }} Success';
export const UPDATE_{{ constantCase plural }}_FAIL =         '[{{ properCase plural }}] Update {{ properCase plural }} Fail';

{{/ifIn}}
{{#ifIn 'DELETE' entityMethods }}
export const DELETE_{{ constantCase name }} =              '[{{ properCase name }}] Delete {{ properCase name }}';
export const DELETE_{{ constantCase name }}_SUCCESS =      '[{{ properCase name }}] Delete {{ properCase name }} Success';
export const DELETE_{{ constantCase name }}_FAIL =         '[{{ properCase name }}] Delete {{ properCase name }} Fail';

{{/ifIn}}
{{#ifIn 'DELETE_MANY' entityMethods }}
export const DELETE_{{ constantCase plural }} =              '[{{ properCase plural }}] Delete {{ properCase plural }}';
export const DELETE_{{ constantCase plural }}_SUCCESS =      '[{{ properCase plural }}] Delete {{ properCase plural }} Success';
export const DELETE_{{ constantCase plural }}_FAIL =         '[{{ properCase plural }}] Delete {{ properCase plural }} Fail';

{{/ifIn}}
{{#ifIn 'CLEAR' entityMethods }}
export const CLEAR_{{ constantCase plural }} =              '[{{ properCase plural }}] Clear {{ properCase plural }}';

{{/ifIn}}
{{#ifIn 'GET' entityMethods }}
/**
 * Load {{ properCase plural }} Actions
 * e.g LoadUsersAction
 */
export class Load{{ properCase plural }}Action implements Action {
  readonly type = LOAD_{{ constantCase plural }};

  constructor(public payload = '') { }
}

export class Load{{ properCase plural }}SuccessAction implements Action {
  readonly type = LOAD_{{ constantCase plural }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Load{{ properCase plural }}FailAction implements Action {
  readonly type = LOAD_{{ constantCase plural }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

{{/ifIn}}
/**
 * Select {{ properCase name }} Action
 */

export class Select{{ properCase name }}Action implements Action {
  readonly type = SELECT_{{ constantCase name }};
  constructor(public {{ camelCase name }}ID: string | number) {}
}

{{#ifIn 'CREATE' entityMethods }}
/**
 * Add {{ properCase name }} Actions
 */
export class Add{{ properCase name }}Action implements Action {
  readonly type = ADD_{{ constantCase name }};

  constructor(public payload: any) { }
}

export class Add{{ properCase name }}SuccessAction implements Action {
  readonly type = ADD_{{ constantCase name }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Add{{ properCase name }}FailAction implements Action {
  readonly type = ADD_{{ constantCase name }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

{{/ifIn}}
{{#ifIn 'CREATE_MANY' entityMethods }}
/**
 * Add {{ properCase plural }} Actions
 */
export class Add{{ properCase plural }}Action implements Action {
  readonly type = ADD_{{ constantCase plural }};

  constructor(public payload: any) { }
}

export class Add{{ properCase plural }}SuccessAction implements Action {
  readonly type = ADD_{{ constantCase plural }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Add{{ properCase plural }}FailAction implements Action {
  readonly type = ADD_{{ constantCase plural }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

{{/ifIn}}
{{#ifIn 'UPDATE' entityMethods }}
/**
 * Update {{ properCase name }} Actions
 */
export class Update{{ properCase name }}Action implements Action {
  readonly type = UPDATE_{{ constantCase name }};

  constructor(public payload: any) { }
}

export class Update{{ properCase name }}SuccessAction implements Action {
  readonly type = UPDATE_{{ constantCase name }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Update{{ properCase name }}FailAction implements Action {
  readonly type = UPDATE_{{ constantCase name }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

{{/ifIn}}
{{#ifIn 'UPDATE_MANY' entityMethods }}
/**
 * Update {{ properCase plural }} Actions
 */
export class Update{{ properCase plural }}Action implements Action {
  readonly type = UPDATE_{{ constantCase plural }};

  constructor(public payload: any) { }
}

export class Update{{ properCase plural }}SuccessAction implements Action {
  readonly type = UPDATE_{{ constantCase plural }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Update{{ properCase plural }}FailAction implements Action {
  readonly type = UPDATE_{{ constantCase plural }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

{{/ifIn}}
{{#ifIn 'DELETE' entityMethods }}
/**
 * Delete {{ properCase name }} Actions
 */
export class Delete{{ properCase name }}Action implements Action {
  readonly type = DELETE_{{ constantCase name }};

  constructor(public payload: any) { }
}

export class Delete{{ properCase name }}SuccessAction implements Action {
  readonly type = DELETE_{{ constantCase name }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Delete{{ properCase name }}FailAction implements Action {
  readonly type = DELETE_{{ constantCase name }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

{{/ifIn}}
{{#ifIn 'DELETE_MANY' entityMethods}}
/**
 * Delete {{ properCase plural }} Actions
 */
export class Delete{{ properCase plural }}Action implements Action {
  readonly type = DELETE_{{ constantCase plural }};

  constructor(public payload: any) { }
}

export class Delete{{ properCase plural }}SuccessAction implements Action {
  readonly type = DELETE_{{ constantCase plural }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Delete{{ properCase plural }}FailAction implements Action {
  readonly type = DELETE_{{ constantCase plural }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

{{/ifIn}}
{{#ifIn 'CLEAR' entityMethods }}
/**
 * Clear {{ properCase plural }} Actions
 */
export class Clear{{ properCase plural }}Action implements Action {
  readonly type = CLEAR_{{ constantCase plural }};

  constructor(public payload: any) { }
}

{{/ifIn}}
export type Actions =
  {{#ifIn 'GET' entityMethods }}
  Load{{ properCase plural }}Action
  | Load{{ properCase plural }}SuccessAction
  | Load{{ properCase plural }}FailAction
  {{/ifIn}}
  | Select{{ properCase name }}Action
  {{#ifIn 'CREATE' entityMethods }}
  | Add{{ properCase name }}Action
  | Add{{ properCase name }}FailAction
  | Add{{ properCase name }}SuccessAction
  {{/ifIn}}
  {{#ifIn 'CREATE_MANY' entityMethods }}
  | Add{{ properCase plural }}Action
  | Add{{ properCase plural }}FailAction
  | Add{{ properCase plural }}SuccessAction
  {{/ifIn}}
  {{#ifIn 'UPDATE' entityMethods }}
  | Update{{ properCase name }}Action
  | Update{{ properCase name }}SuccessAction
  | Update{{ properCase name }}FailAction
  {{/ifIn}}
  {{#ifIn 'UPDATE_MANY' entityMethods }}
  | Update{{ properCase plural }}Action
  | Update{{ properCase plural }}SuccessAction
  | Update{{ properCase plural }}FailAction
  {{/ifIn}}
  {{#ifIn 'DELETE' entityMethods }}
  | Delete{{ properCase name }}Action
  | Delete{{ properCase name }}SuccessAction
  | Delete{{ properCase name }}FailAction
  {{/ifIn}}
  {{#ifIn 'DELETE_MANY' entityMethods }}
  | Delete{{ properCase plural }}Action
  | Delete{{ properCase plural }}SuccessAction
  | Delete{{ properCase plural }}FailAction
  {{/ifIn}}
  {{#ifIn 'CLEAR' entityMethods }}
  | Clear{{ properCase plural }}Action{{/ifIn}};
