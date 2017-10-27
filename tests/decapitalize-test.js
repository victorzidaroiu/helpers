import { expect } from 'chai';
import { decapitalize } from '../src/decapitalize';

describe('The decapitalize function', () => {
  it('Correctly decapitalizes a word', () => {
    expect(decapitalize('Hello')).to.eq('hello');
  });
});
