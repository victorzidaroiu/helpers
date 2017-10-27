import { expect } from 'chai';
import { capitalize } from '../src/capitalize';

describe('The capitalize function', () => {
  it('Correctly capitalizes a word', () => {
    expect(capitalize('hello')).to.eq('Hello');
  });
});
