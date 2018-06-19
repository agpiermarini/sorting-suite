// import { assert , expect } from('chai');
// import { compareNumbers } from('../lib/quickSort.js');
pry = require('pryjs')
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
var compareNumbers = require('../lib/quickSort.js').compareNumbers;
var quickSort = require('../lib/quickSort.js').quickSort;
var swapElements = require('../lib/quickSort.js').swapElements;

describe('compareNumbers', function() {
  it('returns whether first number less than second', function() {
    assert.equal(compareNumbers(7,8), true)
    assert.equal(compareNumbers(8,7), false)
  });
});

describe('swapElements', function() {
  it('swaps two elements in a given array', function() {
    assert.deepEqual(swapElements([7, 8], 0, 1), [8, 7])
    assert.deepEqual(swapElements([7, 8, 9], 0, 1), [8, 7, 9])
  });
});

describe('sort functionality', function() {
  context('quick sort function', function() {
    it('can sort', function() {
      assert.deepEqual(quickSort([ 2 ]), [ 2 ])
      assert.deepEqual(quickSort([ 2, 1 ]), [ 1, 2 ])
      assert.deepEqual(quickSort([ 4, 1, 2 ]), [ 1, 2, 4 ])
      assert.deepEqual(quickSort([ 4, 3, 1, 2 ]), [ 1, 2, 3, 4 ])
      assert.deepEqual(quickSort([ 4, 3, 1, 2, 7, 10, 5 ]), [ 1, 2, 3, 4, 5, 7, 10 ])
    });
  });
});
