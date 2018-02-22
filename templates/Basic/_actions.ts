import { Action } from '@ngrx/store';

export const LOAD_{{ constantCase name }} =                 '[{{ properCase name }}] Load {{ properCase name }}';
export const LOAD_{{ constantCase name }}_SUCCESS =         '[{{ properCase name }}] Load {{ properCase name }} Success';
export const LOAD_{{ constantCase name }}_FAIL =            '[{{ properCase name }}] Load {{ properCase name }} Fail';

/**
 * Load {{ properCase name }} Actions
 */
export class Load{{ properCase name }}Action implements Action {
  readonly type = LOAD_{{ constantCase name }};

  constructor(public payload: any) { }
}

export class Load{{ properCase name }}SuccessAction implements Action {
  readonly type = LOAD_{{ constantCase name }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Load{{ properCase name }}FailAction implements Action {
  readonly type = LOAD_{{ constantCase name }}_FAIL;

  constructor(public error: Error) { }
}

export type Actions =
  | Load{{ properCase name }}Action
  | Load{{ properCase name }}SuccessAction
  | Load{{ properCase name }}FailAction;