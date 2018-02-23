import { reducer } from './person.reducer';
import * as fromPerson from './person.reducer';

describe('PersonReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromPerson.initialState);
  });
});

});