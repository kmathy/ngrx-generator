import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

{{#each crudMethods }}
export const {{this}}_{{ constantCase ../name }} =                 '[{{ properCase ../name }}] {{ properCase this }} {{ properCase ../name }}';
export const {{this}}_{{ constantCase ../name }}_SUCCESS =         '[{{ properCase ../name }}] {{ properCase this }} {{ properCase ../name }} Success';
export const {{this}}_{{ constantCase ../name }}_FAIL =            '[{{ properCase ../name }}] {{ properCase this }} {{ properCase ../name }} Fail';

{{/each}}
{{#ifIn 'GET' crudMethods }}
/**
 * Get {{ properCase name }} Actions
 * e.g GetAuthAction
 */
export class Get{{ properCase name }}Action implements Action {
  readonly type = GET_{{ constantCase name }};

  constructor(public payload: any) { }
}

export class Get{{ properCase name }}SuccessAction implements Action {
  readonly type = GET_{{ constantCase name }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Get{{ properCase name }}FailAction implements Action {
  readonly type = GET_{{ constantCase name }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}
{{/ifIn}}

{{#ifIn 'CREATE' crudMethods }}
/**
 * Create {{ properCase name }} Actions
 */
export class Create{{ properCase name }}Action implements Action {
  readonly type = CREATE_{{ constantCase name }};

  constructor(public payload: any) { }
}

export class Create{{ properCase name }}SuccessAction implements Action {
  readonly type = CREATE_{{ constantCase name }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Create{{ properCase name }}FailAction implements Action {
  readonly type = CREATE_{{ constantCase name }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}
{{/ifIn}}

{{#ifIn 'UPDATE' crudMethods }}
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

{{#ifIn 'DELETE' crudMethods }}
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

export type Actions =
{{#each crudMethods }}
  | {{properCase this}}{{ properCase ../name }}Action
  | {{properCase this}}{{ properCase ../name }}SuccessAction
  | {{properCase this}}{{ properCase ../name }}FailAction
{{/each}};
