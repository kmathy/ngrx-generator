import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Generate constants based on the given name
 * e.g export const LOAD_USERS = '[Auth] Load USERS'
 */

export const LOAD_PEOPLE =                 '[People] Load People';
export const LOAD_PEOPLE_SUCCESS =         '[People] Load People Success';
export const LOAD_PEOPLE_FAIL =            '[People] Load People Fail';

export const SELECT_PERSON = '[Person] Select Person';

export const ADD_PERSON =              '[Person] Add Person';
export const ADD_PERSON_SUCCESS =      '[Person] Add Person Success';
export const ADD_PERSON_FAIL =         '[Person] Add Person Fail';

export const ADD_PEOPLE =              '[People] Add People';
export const ADD_PEOPLE_SUCCESS =      '[People] Add People Success';
export const ADD_PEOPLE_FAIL =         '[People] Add People Fail';

export const UPDATE_PERSON =              '[Person] Update Person';
export const UPDATE_PERSON_SUCCESS =      '[Person] Update Person Success';
export const UPDATE_PERSON_FAIL =         '[Person] Update Person Fail';

export const UPDATE_PEOPLE =              '[People] Update People';
export const UPDATE_PEOPLE_SUCCESS =      '[People] Update People Success';
export const UPDATE_PEOPLE_FAIL =         '[People] Update People Fail';

export const DELETE_PERSON =              '[Person] Delete Person';
export const DELETE_PERSON_SUCCESS =      '[Person] Delete Person Success';
export const DELETE_PERSON_FAIL =         '[Person] Delete Person Fail';

export const DELETE_PEOPLE =              '[People] Delete People';
export const DELETE_PEOPLE_SUCCESS =      '[People] Delete People Success';
export const DELETE_PEOPLE_FAIL =         '[People] Delete People Fail';

export const CLEAR_PEOPLE =              '[People] Clear People';

/**
 * Load People Actions
 * e.g LoadUsersAction
 */
export class LoadPeopleAction implements Action {
  readonly type = LOAD_PEOPLE;

  constructor(public payload = '') { }
}

export class LoadPeopleSuccessAction implements Action {
  readonly type = LOAD_PEOPLE_SUCCESS;

  constructor(public payload: any) { }
}

export class LoadPeopleFailAction implements Action {
  readonly type = LOAD_PEOPLE_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Select Person Action
 */

export class SelectPersonAction implements Action {
  readonly type = SELECT_PERSON;
  constructor(public personID: string | number) {}
}

/**
 * Add Person Actions
 */
export class AddPersonAction implements Action {
  readonly type = ADD_PERSON;

  constructor(public payload: any) { }
}

export class AddPersonSuccessAction implements Action {
  readonly type = ADD_PERSON_SUCCESS;

  constructor(public payload: any) { }
}

export class AddPersonFailAction implements Action {
  readonly type = ADD_PERSON_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Add People Actions
 */
export class AddPeopleAction implements Action {
  readonly type = ADD_PEOPLE;

  constructor(public payload: any) { }
}

export class AddPeopleSuccessAction implements Action {
  readonly type = ADD_PEOPLE_SUCCESS;

  constructor(public payload: any) { }
}

export class AddPeopleFailAction implements Action {
  readonly type = ADD_PEOPLE_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Update Person Actions
 */
export class UpdatePersonAction implements Action {
  readonly type = UPDATE_PERSON;

  constructor(public payload: any) { }
}

export class UpdatePersonSuccessAction implements Action {
  readonly type = UPDATE_PERSON_SUCCESS;

  constructor(public payload: any) { }
}

export class UpdatePersonFailAction implements Action {
  readonly type = UPDATE_PERSON_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Update People Actions
 */
export class UpdatePeopleAction implements Action {
  readonly type = UPDATE_PEOPLE;

  constructor(public payload: any) { }
}

export class UpdatePeopleSuccessAction implements Action {
  readonly type = UPDATE_PEOPLE_SUCCESS;

  constructor(public payload: any) { }
}

export class UpdatePeopleFailAction implements Action {
  readonly type = UPDATE_PEOPLE_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Delete Person Actions
 */
export class DeletePersonAction implements Action {
  readonly type = DELETE_PERSON;

  constructor(public payload: any) { }
}

export class DeletePersonSuccessAction implements Action {
  readonly type = DELETE_PERSON_SUCCESS;

  constructor(public payload: any) { }
}

export class DeletePersonFailAction implements Action {
  readonly type = DELETE_PERSON_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Delete People Actions
 */
export class DeletePeopleAction implements Action {
  readonly type = DELETE_PEOPLE;

  constructor(public payload: any) { }
}

export class DeletePeopleSuccessAction implements Action {
  readonly type = DELETE_PEOPLE_SUCCESS;

  constructor(public payload: any) { }
}

export class DeletePeopleFailAction implements Action {
  readonly type = DELETE_PEOPLE_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Clear People Actions
 */
export class ClearPeopleAction implements Action {
  readonly type = CLEAR_PEOPLE;

  constructor(public payload: any) { }
}

export type Actions =
  LoadPeopleAction
  | LoadPeopleSuccessAction
  | LoadPeopleFailAction
  | SelectPersonAction
  | AddPersonAction
  | AddPersonFailAction
  | AddPersonSuccessAction
  | AddPeopleAction
  | AddPeopleFailAction
  | AddPeopleSuccessAction
  | UpdatePersonAction
  | UpdatePersonSuccessAction
  | UpdatePersonFailAction
  | UpdatePeopleAction
  | UpdatePeopleSuccessAction
  | UpdatePeopleFailAction
  | DeletePersonAction
  | DeletePersonSuccessAction
  | DeletePersonFailAction
  | DeletePeopleAction
  | DeletePeopleSuccessAction
  | DeletePeopleFailAction
  | ClearPeopleAction;
