import * as {{ camelCase name }} from '{{position "actions"}}/{{ kebabCase name }}.actions';
import { HttpErrorResponse } from '@angular/common/http';

import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export interface {{ properCase name }} { // Or you can replace it by importing your own model
  id: number;
}

export const {{ camelCase name }}Adapter: EntityAdapter<{{ properCase name }}> = createEntityAdapter<{{ properCase name }}>({
  sortComparer: false
});
// tslint:disable-next-line:no-empty-interface
export interface {{ properCase name }}State extends EntityState<{{ properCase name }}> {
  loading: boolean;
  error: HttpErrorResponse;
  selected{{ properCase name }}ID: string | number | null;
}

export const default{{ properCase name }}State = {
  loading: false,
  error: null,
  selected{{ properCase name }}ID: null
};

export const initial{{ properCase name }}State: {{ properCase name }}State = {{ camelCase name }}Adapter.getInitialState(default{{ properCase name }}State);

export function reducer(state = initial{{ properCase name }}State, action: {{ camelCase name }}.Actions): {{ properCase name }}State {
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
        selected{{ properCase name }}ID: action.{{ camelCase name }}ID
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
        ...{{ camelCase name }}Adapter.removeAll({ ...state, loading: true, error: null, selected{{ properCase name }}ID: null }),
      };

    {{/ifIn}}
    default: {
      return state;
    }
  }
}
