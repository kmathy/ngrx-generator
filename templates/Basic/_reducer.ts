import * as {{ camelCase name }} from '{{position "actions"}}/{{ kebabCase name }}.actions';

export interface {{ properCase name }}State {
  loading: boolean;
  entities: { [id: string]: any };
  result: string[];
  error: Error;
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
    case {{ camelCase name }}.LOAD_{{ constantCase name }}: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case {{ camelCase name }}.LOAD_{{ constantCase name }}_SUCCESS: {
      return {
        ...state,
        result: action.payload,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case {{ camelCase name }}.LOAD_{{ constantCase name }}_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    default: {
      return state;
    }
  }
}
