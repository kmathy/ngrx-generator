import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

{{#each crudMethods }}
export const {{this}}_{{ constantCase ../name }} =                 '[{{ titleCase ../name }}] Get {{ titleCase ../name }}';
export const {{this}}_{{ constantCase ../name }}_SUCCESS =         '[{{ titleCase ../name }}] Get {{ titleCase ../name }} Success';
export const {{this}}_{{ constantCase ../name }}_FAIL =            '[{{ titleCase ../name }}] Get {{ titleCase ../name }} Fail';

{{/each}}
{{#ifIn 'GET' crudMethods }}
/**
 * Get {{ titleCase name }} Actions
 * e.g GetAuthAction
 */
export class Get{{ titleCase name }}Action implements Action {
  readonly type = GET_{{ constantCase name }};

  constructor(public payload: any) { }
}

export class Get{{ titleCase name }}SuccessAction implements Action {
  readonly type = GET_{{ constantCase name }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Get{{ titleCase name }}FailAction implements Action {
  readonly type = GET_{{ constantCase name }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}
{{/ifIn}}

{{#ifIn 'CREATE' crudMethods }}
/**
 * Create {{ titleCase name }} Actions
 */
export class Create{{ titleCase name }}Action implements Action {
  readonly type = CREATE_{{ constantCase name }};

  constructor(public payload: any) { }
}

export class Create{{ titleCase name }}SuccessAction implements Action {
  readonly type = CREATE_{{ constantCase name }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Create{{ titleCase name }}FailAction implements Action {
  readonly type = CREATE_{{ constantCase name }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}
{{/ifIn}}

{{#ifIn 'UPDATE' crudMethods }}
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
{{/ifIn}}

{{#ifIn 'DELETE' crudMethods }}
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
{{/ifIn}}

export type Actions =
{{#each crudMethods }}
  | {{properCase this}}{{ titleCase ../name }}Action
  | {{properCase this}}{{ titleCase ../name }}SuccessAction
  | {{properCase this}}{{ titleCase ../name }}FailAction
{{/each}};
