import {
    ActionReducerMap,
    ActionReducer,
    MetaReducer,
    createSelector,
    createFeatureSelector,
} from '@ngrx/store';
// import * as fromRouter from '@ngrx/router-store'; // in case you need it

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from 'environments/environment';

// -- IMPORT REDUCER --
import * as user from './crud-entity/user.reducer';
import * as crud from './crud/crud.reducer';
import * as basic from './basic/basic.reducer';

export interface State {
    // -- IMPORT STATE --
	user: user.UserState;
	crud: crud.CrudState;
    basic: basic.BasicState;
}

export const reducers: ActionReducerMap<State> = {
    // -- ADD REDUCER --
	user: user.reducer,
	crud: crud.reducer,
    basic: basic.reducer
};

/** For debug purpose */
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.groupCollapsed(action.type);
        const nextState = reducer(state, action);
        console.log(`%c previous state`, `color: #9E9E9E; font-weight: bold`, state);
        console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
        console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
        console.groupEnd();
        return nextState;
    };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger, storeFreeze]
    : [];
