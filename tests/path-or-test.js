import { expect } from 'chai';
import pathOr from '../src/path-or';

describe('The pathOr helper', () => {
  describe('correctly gets a nested property from an object', () => {
    it('when the property exists', () => {
      const testObject = {
        a: {
          b: 20,
        },
      };
      const result = pathOr(testObject, 'default_value', 'a', 'b');

      expect(result).to.eq(20);
    });

    it('when the property does not exist', () => {
      const result = pathOr({}, 'default_value', 'a', 'b');

      expect(result).to.eq('default_value');
    });
  });
});
