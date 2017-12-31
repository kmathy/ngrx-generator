import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from './user.service';
import * as userActions from './user.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserEffects {
  @Effect() loadUsers$;
  @Effect() addUser$;
  @Effect() addUsers$;
  @Effect() updateUser$;
  @Effect() updateUsers$;
  @Effect() deleteUser$;
  @Effect() deleteUsers$;
  @Effect() clearUsers$;
  
  constructor(
    private userService: UserService,
    private actions$: Actions
  ) {
    this.loadUsers$ = this.actions$
      .ofType(userActions.LOAD_USERS)
      .switchMap((state: userActions.LoadUsersAction) => this.userService.loadUsers()
        // If successful, dispatch success action with result
        .map(res => new userActions.LoadUsersSuccessAction(res))
        // If request fails, dispatch failed action
        .catch((err: HttpErrorResponse) => Observable.of(new userActions.LoadUsersFailAction(err)))
      );

    this.addUser$ = this.actions$
      .ofType(userActions.ADD_USER)
      .switchMap((state: userActions.AddUserAction) => this.userService.addUser(state.payload)
        .map(res => new userActions.AddUserSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new userActions.AddUserFailAction(err)))
      );

    this.addUsers$ = this.actions$
      .ofType(userActions.ADD_USERS)
      .switchMap((state: userActions.AddUsersAction) => this.userService.addUsers(state.payload)
        .map(res => new userActions.AddUsersSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new userActions.AddUsersFailAction(err)))
      );

    this.updateUser$ = this.actions$
      .ofType(userActions.UPDATE_USER)
      .switchMap((state: userActions.UpdateUserAction) => this.userService.updateUser(state.payload)
        .map(res => new userActions.UpdateUserSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new userActions.UpdateUserFailAction(err)))
      );

    this.updateUsers$ = this.actions$
      .ofType(userActions.UPDATE_USERS)
      .switchMap((state: userActions.UpdateUsersAction) => this.userService.updateUsers(state.payload)
        .map(res => new userActions.UpdateUsersSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new userActions.UpdateUsersFailAction(err)))
      );

    this.deleteUser$ = this.actions$
      .ofType(userActions.DELETE_USER)
      .switchMap((state: userActions.DeleteUserAction) => this.userService.deleteUser(state.payload)
        .map(res => new userActions.DeleteUserSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new userActions.DeleteUserFailAction(err)))
      );

    this.deleteUsers$ = this.actions$
      .ofType(userActions.DELETE_USERS)
      .switchMap((state: userActions.DeleteUsersAction) => this.userService.deleteUsers(state.payload)
        .map(res => new userActions.DeleteUsersSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new userActions.DeleteUsersFailAction(err)))
      );

    this.clearUsers$ = this.actions$
      .ofType(userActions.CLEAR_USERS)
      .switchMap((state: userActions.ClearUsersAction) => this.userService.clearUsers(state.payload)
        .map(res => new userActions.ClearUsersSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new userActions.ClearUsersFailAction(err)))
      );
  }

}
