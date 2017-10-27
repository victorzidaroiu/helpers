import { expect } from 'chai';
import { hash } from '../src/hash';

describe('The hash function', () => {
  it("correctly hashes the text 'Hello world'.", () => {
    expect(hash('Hello world')).to.eq('B7F783BAED8297F0DB917462184FF4F08E69C2D5E5F79A942600F9725F58CE1F29C18139BF80B06C0FFF2BDD34738452ECF40C488C22A7E3D80CDF6F9C1C0D47');
  });
});
