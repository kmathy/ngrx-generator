import { Action } from '@ngrx/store';

export const LOAD_BASIC =                 '[Basic] Load Basic';
export const LOAD_BASIC_SUCCESS =         '[Basic] Load Basic Success';
export const LOAD_BASIC_FAIL =            '[Basic] Load Basic Fail';

/**
 * Load Basic Actions
 */
export class LoadBasicAction implements Action {
  readonly type = LOAD_BASIC;

  constructor(public payload: any) { }
}

export class LoadBasicSuccessAction implements Action {
  readonly type = LOAD_BASIC_SUCCESS;

  constructor(public payload: any) { }
}

export class LoadBasicFailAction implements Action {
  readonly type = LOAD_BASIC_FAIL;

  constructor(public error: Error) { }
}

export type Actions =
  | LoadBasicAction
  | LoadBasicSuccessAction
  | LoadBasicFailAction;