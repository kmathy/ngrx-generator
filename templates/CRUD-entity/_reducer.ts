import * as {{ camelCase name }} from '{{position "actions"}}/{{ kebabCase name }}.actions';
import { HttpErrorResponse } from '@angular/common/http';

import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

export interface I{{ titleCase name }} {
  id: number;
}

export const {{ camelCase name }}Adapter: EntityAdapter<I{{ titleCase name }}> = createEntityAdapter<I{{ titleCase name }}>();
// tslint:disable-next-line:no-empty-interface
export interface {{ titleCase name }}State extends EntityState<I{{ titleCase name }}> {
  loading: boolean;
  errorMessage: string | null;
  successMessage: string | null;
}

export const default{{ titleCase name }}State = {
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

export const initial{{ titleCase name }}State: {{ titleCase name }}State = {{ camelCase name }}Adapter.getInitialState(default{{ titleCase name }}State);

export function reducer(state = initial{{ titleCase name }}State, action: {{ camelCase name }}.Actions): {{ titleCase name }}State {
  switch (action.type) {
    case {{ camelCase name }}.LOAD_{{ constantCase name }}S:
      return {
        ...{{ camelCase name }}Adapter.addAll(action.payload.{{ camelCase name }}s, state),
        loading: true,
      };

    case {{ camelCase name }}.LOAD_{{ constantCase name }}S_SUCCESS: 
      return {
        ...state,
        loading: false,
        successMessage: 'Loading of {{ titleCase name }} has been successful!'
      };

    case {{ camelCase name }}.LOAD_{{ constantCase name }}S_FAIL: 
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };

    case {{ camelCase name }}.ADD_{{ constantCase name }}:
      return {
        ...{{ camelCase name }}Adapter.addOne(action.payload.{{ camelCase name }}, state),
        loading: true
      };

    case {{ camelCase name }}.ADD_{{ constantCase name }}_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: 'Loading of {{ titleCase name }} has been successful!'
      }; 

    case {{ camelCase name }}.ADD_{{ constantCase name }}_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };

    case {{ camelCase name }}.ADD_{{ constantCase name }}S:
      return {
        ...{{ camelCase name }}Adapter.addMany(action.payload.{{ camelCase name }}s, state),
        loading: true
      };

    case {{ camelCase name }}.ADD_{{ constantCase name }}S_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: 'Loading of {{ titleCase name }} has been successful!'
      };

    case {{ camelCase name }}.ADD_{{ constantCase name }}S_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };

    case {{ camelCase name }}.UPDATE_{{ constantCase name }}:
      return {
        ...{{ camelCase name }}Adapter.updateOne(action.payload.id, state),
        loading: true
      };

    case {{ camelCase name }}.UPDATE_{{ constantCase name }}_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: 'Loading of {{ titleCase name }} has been successful!'
      };

    case {{ camelCase name }}.UPDATE_{{ constantCase name }}_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };

    case {{ camelCase name }}.UPDATE_{{ constantCase name }}S:
      return {
        ...{{ camelCase name }}Adapter.updateMany(action.payload.ids, state),
        loading: true 
      };

    case {{ camelCase name }}.UPDATE_{{ constantCase name }}S_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: 'Loading of {{ titleCase name }} has been successful!'
      };

    case {{ camelCase name }}.UPDATE_{{ constantCase name }}S_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };

    case {{ camelCase name }}.DELETE_{{ constantCase name }}:
      return {
        ...{{ camelCase name }}Adapter.removeOne(action.payload.id, state),
        loading: true
      };

    case {{ camelCase name }}.DELETE_{{ constantCase name }}_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: 'Loading of {{ titleCase name }} has been successful!'
      };

    case {{ camelCase name }}.DELETE_{{ constantCase name }}_FAIL: 
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };

    case {{ camelCase name }}.DELETE_{{ constantCase name }}S:
      return {
        ...{{ camelCase name }}Adapter.removeOne(action.payload.ids, state),
        loading: true
      };

    case {{ camelCase name }}.DELETE_{{ constantCase name }}S_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: 'Loading of {{ titleCase name }} has been successful!'
      };

    case {{ camelCase name }}.DELETE_{{ constantCase name }}S_FAIL: 
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };

    case {{ camelCase name }}.CLEAR_{{ constantCase name }}S:
      return {
        ...{{ camelCase name }}Adapter.removeAll({ ...state }),
        loading: true
      };

    case {{ camelCase name }}.CLEAR_{{ constantCase name }}S_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: 'Loading of {{ titleCase name }} has been successful!'
      };

    case {{ camelCase name }}.CLEAR_{{ constantCase name }}S_FAIL:
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

export const get{{ titleCase name }}State = createFeatureSelector<{{ titleCase name }}State>({{ camelCase name }});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = {{ camelCase name }}Adapter.getSelectors(get{{ titleCase name }}State);
