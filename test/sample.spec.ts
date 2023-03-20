
import { expect } from 'chai';
import { add } from '../sample';
import * as forEach from 'mocha-each';

describe('sample',  () => {

  it('1 + 1 should be 2', () => {
    expect(add(1, 1)).to.equal(2);
  });
});

describe('add', ()=> {
  forEach([[1,1,2],[1, -1, 0]]).it('%s + %s = %s', (num, another, sum) => {
    expect(add(num,another)).to.eq(sum);
  });
});
