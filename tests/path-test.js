import { expect } from 'chai';
import { path } from '../src/path';

describe('The path helper', () => {
  describe('correctly gets a nested property from an object', () => {
    it('when the property exists', () => {
      const testObject = {
        a: {
          b: 20,
        },
      };
      const result = path(testObject, 'a', 'b');

      expect(result).to.eq(20);
    });

    it('when the property does not exist', () => {
      const result = path({}, 'a', 'b');

      expect(result).to.eq(undefined);
    });
  });
});
