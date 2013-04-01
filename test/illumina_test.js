(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  var pluginPrefix = 'il-';

  // Define custom function for testing whether an element exists or not.
  $.fn.exists = function() {
    return !!this.length;
  };

  module('jQuery#illumina', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('.illumina');
    }
  });

  test('is chainable', function() {
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.illumina(), this.elems, 'should be chainable');
  });

  test('creates a placeholder element for displaying the lightbox', function() {
    ok($('.' + pluginPrefix + 'container').exists());
  });

  module('jQuery.illumina');
}(jQuery));
