import { expect } from 'chai';
import { split } from '../src/split';

describe('The split helper', () => {
  it('correctly splits the values of a list into 2 according to a rule', () => {
    const testList = [1, 2, 3, 10];
    const [a, b] = split(testList, x => x < 5);

    expect(a).to.eql([1, 2, 3]);
    expect(b).to.eql([10]);
  });
});
