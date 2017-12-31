import * as user from './user.actions';
import { HttpErrorResponse } from '@angular/common/http';

import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

export interface IUser {
  id: number;
}

export const userAdapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();
// tslint:disable-next-line:no-empty-interface
export interface UserState extends EntityState<IUser> {
  loading: boolean;
  errorMessage: string | null;
  successMessage: string | null;
}

export const defaultUserState = {
  ids: [0],
  entities: {
    0: {
      id: 0,
    }
  },
  loading: false,
  errorMessage: null,
  successMessage: null
};

export const initialUserState: UserState = userAdapter.getInitialState(defaultUserState);

export function reducer(state = initialUserState, action: user.Actions): UserState {
  switch (action.type) {
    case user.LOAD_USERS:
      return {
        ...userAdapter.addAll(action.payload.users, state),
        loading: true,
      };

    case user.LOAD_USERS_SUCCESS: 
      return {
        ...state,
        loading: false,
        successMessage: 'Loading of User has been successful!'
      };

    case user.LOAD_USERS_FAIL: 
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };

    case user.ADD_USER:
      return {
        ...userAdapter.addOne(action.payload.user, state),
        loading: true
      };

    case user.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: 'Loading of User has been successful!'
      }; 

    case user.ADD_USER_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };

    case user.ADD_USERS:
      return {
        ...userAdapter.addMany(action.payload.users, state),
        loading: true
      };

    case user.ADD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: 'Loading of User has been successful!'
      };

    case user.ADD_USERS_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };

    case user.UPDATE_USER:
      return {
        ...userAdapter.updateOne(action.payload.id, state),
        loading: true
      };

    case user.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: 'Loading of User has been successful!'
      };

    case user.UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };

    case user.UPDATE_USERS:
      return {
        ...userAdapter.updateMany(action.payload.ids, state),
        loading: true 
      };

    case user.UPDATE_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: 'Loading of User has been successful!'
      };

    case user.UPDATE_USERS_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };

    case user.DELETE_USER:
      return {
        ...userAdapter.removeOne(action.payload.id, state),
        loading: true
      };

    case user.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: 'Loading of User has been successful!'
      };

    case user.DELETE_USER_FAIL: 
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };

    case user.DELETE_USERS:
      return {
        ...userAdapter.removeOne(action.payload.ids, state),
        loading: true
      };

    case user.DELETE_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: 'Loading of User has been successful!'
      };

    case user.DELETE_USERS_FAIL: 
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };

    case user.CLEAR_USERS:
      return {
        ...userAdapter.removeAll({ ...state }),
        loading: true
      };

    case user.CLEAR_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: 'Loading of User has been successful!'
      };

    case user.CLEAR_USERS_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };

    default: {
      return state;
    }
  }
}

export const getUserState = createFeatureSelector<UserState>(user);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = userAdapter.getSelectors(getUserState);
