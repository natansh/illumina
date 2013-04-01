/*! Illumina - v0.1.0 - 2013-04-01
* https://github.com/natansh/illumina
* Copyright (c) 2013 Natansh Verma; Licensed MIT */
;(function($) {

  var pluginPrefix='il-',
    $container; 

  function initialize() {
    if(!document.body) {
      // `initialize` should not fail silently
    }

    if(!$container) { 
      // Create the basic HTML structure
      $container = $('<div></div>').addClass(pluginPrefix + 'container');
      $('body').append($container[0]);
    }
  }

  $(document).ready(function() {
    initialize();
  });

  // Collection method.
  $.fn.illumina = function(options) {

    var settings = $.extend({
    }, options);

    settings['false'] = false;

    return this.each(function() {
      var $this = $(this);
    });
  };
}(jQuery));
