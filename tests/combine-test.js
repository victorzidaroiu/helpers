import { expect } from 'chai';
import { combine } from '../src/combine';

describe('The combine function', () => {
  context('when using sort and filter', () => {
    const a = [1, 2, 3, 100];

    const actual = combine(a)
        .filter(n => n !== 100)
        .map(n => `${n}!`)
        .done();

    const expected = ['1!', '2!', '3!'];

    it('correctly returns a transformed and filtered list', () => {
      expect(actual).to.eql(expected);
    });
  });
});
