// Require the built in 'assertion' library
var assert = require('assert');
// Create a group of tests about Arrays
describe('Array', function() {
  // Within our Array group, Create a group of tests for indexOf
  describe('#indexOf()', function() {
    // A string explanation of what we're testing
    it('should return -1 when the value is not present', function(){
      // Our actual test: -1 should equal indexOf(...)
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Math', function() {
  describe('testOne', function() {
    it('should test if 3 times 3 equals 9', function() {
      assert.equal(9, (3*3));
    });
  });
  describe('testTwo', function() {
    it('should test if 3 minus four times eight equals negative 8', function() {
      assert.equal(-8, (3-4)*8)
    })
  })
});

describe('Compare', function() {
  describe('Star Wars Quotes', function() {
    it('should test whether two data types are both strings ', function() {
      assert.equal(true, typeof "May the Fourth Be With You" === typeof "Help me Obi Wan Kenobi, you're my only hope")
    })
  })
})
