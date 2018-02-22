import * as {{ camelCase name }} from '{{position "actions"}}/{{ kebabCase name }}.actions';
import { HttpErrorResponse } from '@angular/common/http';

import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export interface {{ titleCase name }} { // Or you can replace it by importing your own model
  id: number;
}

export const {{ camelCase name }}Adapter: EntityAdapter<{{ titleCase name }}> = createEntityAdapter<{{ titleCase name }}>({
  sortComparer: false
});
// tslint:disable-next-line:no-empty-interface
export interface {{ titleCase name }}State extends EntityState<{{ titleCase name }}> {
  loading: boolean;
  error: HttpErrorResponse;
  selected{{ titleCase name }}ID: string | number | null;
}

export const default{{ titleCase name }}State = {
  loading: false,
  error: null,
  selected{{ titleCase name }}ID: null
};

export const initial{{ titleCase name }}State: {{ titleCase name }}State = {{ camelCase name }}Adapter.getInitialState(default{{ titleCase name }}State);

export function reducer(state = initial{{ titleCase name }}State, action: {{ camelCase name }}.Actions): {{ titleCase name }}State {
  switch (action.type) {
    {{#ifIn 'GET' entityMethods }}
    case {{ camelCase name }}.LOAD_{{ constantCase plural }}:
      return {
        ...state,
        loading: true,
        error: null
      };

    case {{ camelCase name }}.LOAD_{{ constantCase plural }}_SUCCESS:
      return {
        ...{{ camelCase name }}Adapter.addAll(action.payload, state),
        loading: false,
        error: null
      };

    case {{ camelCase name }}.LOAD_{{ constantCase plural }}_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    {{/ifIn}}
    case {{ camelCase name }}.SELECT_{{ constantCase name }}:
      return {
        ...state,
        loading: false,
        error: null,
        selected{{ titleCase name }}ID: action.{{ camelCase name }}ID
      };

    {{#ifIn 'CREATE' entityMethods }}
    case {{ camelCase name }}.ADD_{{ constantCase name }}:
      return {
        ...state,
        loading: true,
        error: null
      };

    case {{ camelCase name }}.ADD_{{ constantCase name }}_SUCCESS:
      return {
        ...{{ camelCase name }}Adapter.addOne(action.payload.{{ camelCase name }}, state),
        loading: false,
        error: null
      };

    case {{ camelCase name }}.ADD_{{ constantCase name }}_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    {{/ifIn}}
    {{#ifIn 'CREATE_MANY' entityMethods }}
    case {{ camelCase name }}.ADD_{{ constantCase plural }}:
      return {
        ...state,
        loading: true,
        error: null
      };

    case {{ camelCase name }}.ADD_{{ constantCase plural }}_SUCCESS:
      return {
        ...{{ camelCase name }}Adapter.addMany(action.payload.{{ camelCase plural }}, state),
        loading: false,
        error: null
      };

    case {{ camelCase name }}.ADD_{{ constantCase plural }}_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    {{/ifIn}}
    {{#ifIn 'UPDATE' entityMethods }}
    case {{ camelCase name }}.UPDATE_{{ constantCase name }}:
      return {
        ...state,
        loading: true,
        error: null
      };

    case {{ camelCase name }}.UPDATE_{{ constantCase name }}_SUCCESS:
      return {
        ...{{ camelCase name }}Adapter.updateOne(action.payload.id, state),
        loading: false,
        error: null
      };

    case {{ camelCase name }}.UPDATE_{{ constantCase name }}_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    {{/ifIn}}
    {{#ifIn 'UPDATE_MANY' entityMethods }}
    case {{ camelCase name }}.UPDATE_{{ constantCase plural }}:
      return {
        ...state,
        loading: true,
        error: null
      };

    case {{ camelCase name }}.UPDATE_{{ constantCase plural }}_SUCCESS:
      return {
        ...{{ camelCase name }}Adapter.updateMany(action.payload.ids, state),
        loading: false,
        error: null
      };

    case {{ camelCase name }}.UPDATE_{{ constantCase plural }}_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    {{/ifIn}}
    {{#ifIn 'DELETE' entityMethods }}
    case {{ camelCase name }}.DELETE_{{ constantCase name }}:
      return {
        ...state,
        loading: true,
        error: null
      };

    case {{ camelCase name }}.DELETE_{{ constantCase name }}_SUCCESS:
      return {
        ...{{ camelCase name }}Adapter.removeOne(action.payload.id, state),
        loading: false,
        error: null
      };

    case {{ camelCase name }}.DELETE_{{ constantCase name }}_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    {{/ifIn}}  
    {{#ifIn 'DELETE_MANY' entityMethods }}
    case {{ camelCase name }}.DELETE_{{ constantCase plural }}:
      return {
        ...state,
        loading: true,
        error: null
      };

    case {{ camelCase name }}.DELETE_{{ constantCase plural }}_SUCCESS:
      return {
        ...{{ camelCase name }}Adapter.removeOne(action.payload.ids, state),
        loading: false,
        error: null
      };

    case {{ camelCase name }}.DELETE_{{ constantCase plural }}_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    {{/ifIn}}
    {{#ifIn 'CLEAR' entityMethods }}
    case {{ camelCase name }}.CLEAR_{{ constantCase plural }}:
      return {
        ...{{ camelCase name }}Adapter.removeAll({ ...state, loading: true, error: null, selected{{ titleCase name }}ID: null }),
      };

    {{/ifIn}}
    default: {
      return state;
    }
  }
}
