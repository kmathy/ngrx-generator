import * as {{ camelCase name }} from '{{position "actions"}}/{{ kebabCase name }}.actions';
import { HttpErrorResponse } from '@angular/common/http';

export interface {{ properCase name }}State {
  loading: boolean;
  entities: { [id: string]: any };
  result: any[];
  error: HttpErrorResponse;
  type: string;
};

export const initialState: {{ properCase name }}State = {
  loading: false,
  entities: {},
  result: [],
  error: null,
  type: ''
};

export function reducer(state = initialState, action: {{ camelCase name }}.Actions): {{ properCase name }}State {
  switch (action.type) {
    {{#ifIn 'GET' crudMethods }}
    case {{ camelCase name }}.GET_{{ constantCase name }}: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case {{ camelCase name }}.GET_{{ constantCase name }}_SUCCESS: {
      return {
        ...state,
        result: action.payload,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case {{ camelCase name }}.GET_{{ constantCase name }}_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }
    {{/ifIn}}
    {{#ifIn 'CREATE' crudMethods }}
    case {{ camelCase name }}.CREATE_{{ constantCase name }}: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case {{ camelCase name }}.CREATE_{{ constantCase name }}_SUCCESS: {
      const result = [...state.result, action.payload];
      return {
        ...state,
        result: result,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case {{ camelCase name }}.CREATE_{{ constantCase name }}_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }
    {{/ifIn}}
    {{#ifIn 'UPDATE' crudMethods }}
    case {{ camelCase name }}.UPDATE_{{ constantCase name }}: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case {{ camelCase name }}.UPDATE_{{ constantCase name }}_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case {{ camelCase name }}.UPDATE_{{ constantCase name }}_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }
    {{/ifIn}}
    {{#ifIn 'DELETE' crudMethods }}
    case {{ camelCase name }}.DELETE_{{ constantCase name }}: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case {{ camelCase name }}.DELETE_{{ constantCase name }}_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case {{ camelCase name }}.DELETE_{{ constantCase name }}_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }
    {{/ifIn}}

    default: {
      return state;
    }
  }
}
