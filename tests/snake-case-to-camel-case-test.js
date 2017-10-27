import { expect } from 'chai';
import { snakeCaseToCamelCase } from '../src/snake-case-to-camel-case';

describe('The snakeCaseToCamelCase function', () => {
  it('Correctly converts a word from snake case to camel case', () => {
    expect(snakeCaseToCamelCase('word_to_convert')).to.eq('wordToConvert');
  });
});
