
import { expect } from 'chai';
import { add } from '../sample';


describe('sample',  () => {

  it('1 + 1 should be 2', () => {
    expect(add(1, 1)).to.equal(2);
  });



});