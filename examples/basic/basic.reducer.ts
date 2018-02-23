import * as basic from './basic.actions';

export interface BasicState {
  loading: boolean;
  entities: { [id: string]: any };
  result: string[];
  error: Error;
  type: string;
};

export const initialState: BasicState = {
  loading: false,
  entities: {},
  result: [],
  error: null,
  type: ''
};

export function reducer(state = initialState, action: basic.Actions): BasicState {
  switch (action.type) {
    case basic.LOAD_BASIC: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case basic.LOAD_BASIC_SUCCESS: {
      return {
        ...state,
        result: action.payload,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case basic.LOAD_BASIC_FAIL: {
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
