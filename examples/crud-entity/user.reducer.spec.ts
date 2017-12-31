import { reducer } from './user.reducer';
import * as fromUser from './user.reducer';

describe('UserReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromUser.initialState);
  });
});

});