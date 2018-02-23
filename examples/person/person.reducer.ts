import * as person from './person.actions';
import { HttpErrorResponse } from '@angular/common/http';

import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export interface Person { // Or you can replace it by importing your own model
  id: number;
}

export const personAdapter: EntityAdapter<Person> = createEntityAdapter<Person>({
  sortComparer: false
});
// tslint:disable-next-line:no-empty-interface
export interface PersonState extends EntityState<Person> {
  loading: boolean;
  error: HttpErrorResponse;
  selectedPersonID: string | number | null;
}

export const defaultPersonState = {
  loading: false,
  error: null,
  selectedPersonID: null
};

export const initialPersonState: PersonState = personAdapter.getInitialState(defaultPersonState);

export function reducer(state = initialPersonState, action: person.Actions): PersonState {
  switch (action.type) {
    case person.LOAD_PEOPLE:
      return {
        ...state,
        loading: true,
        error: null
      };

    case person.LOAD_PEOPLE_SUCCESS:
      return {
        ...personAdapter.addAll(action.payload, state),
        loading: false,
        error: null
      };

    case person.LOAD_PEOPLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case person.SELECT_PERSON:
      return {
        ...state,
        loading: false,
        error: null,
        selectedPersonID: action.personID
      };

    case person.ADD_PERSON:
      return {
        ...state,
        loading: true,
        error: null
      };

    case person.ADD_PERSON_SUCCESS:
      return {
        ...personAdapter.addOne(action.payload.person, state),
        loading: false,
        error: null
      };

    case person.ADD_PERSON_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case person.ADD_PEOPLE:
      return {
        ...state,
        loading: true,
        error: null
      };

    case person.ADD_PEOPLE_SUCCESS:
      return {
        ...personAdapter.addMany(action.payload.people, state),
        loading: false,
        error: null
      };

    case person.ADD_PEOPLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case person.UPDATE_PERSON:
      return {
        ...state,
        loading: true,
        error: null
      };

    case person.UPDATE_PERSON_SUCCESS:
      return {
        ...personAdapter.updateOne(action.payload.id, state),
        loading: false,
        error: null
      };

    case person.UPDATE_PERSON_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case person.UPDATE_PEOPLE:
      return {
        ...state,
        loading: true,
        error: null
      };

    case person.UPDATE_PEOPLE_SUCCESS:
      return {
        ...personAdapter.updateMany(action.payload.ids, state),
        loading: false,
        error: null
      };

    case person.UPDATE_PEOPLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case person.DELETE_PERSON:
      return {
        ...state,
        loading: true,
        error: null
      };

    case person.DELETE_PERSON_SUCCESS:
      return {
        ...personAdapter.removeOne(action.payload.id, state),
        loading: false,
        error: null
      };

    case person.DELETE_PERSON_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case person.DELETE_PEOPLE:
      return {
        ...state,
        loading: true,
        error: null
      };

    case person.DELETE_PEOPLE_SUCCESS:
      return {
        ...personAdapter.removeOne(action.payload.ids, state),
        loading: false,
        error: null
      };

    case person.DELETE_PEOPLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case person.CLEAR_PEOPLE:
      return {
        ...personAdapter.removeAll({ ...state, loading: true, error: null, selectedPersonID: null }),
      };

    default: {
      return state;
    }
  }
}

export const {
  selectIds: selectPersonIDs,
  selectEntities: selectPersonEntities,
  selectAll: selectAllPeople,
  selectTotal: selectPersonTotal
} = personAdapter.getSelectors();
