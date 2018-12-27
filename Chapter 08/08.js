// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
(function ($) {
  $.fn.myMethod = function () {
    alert('Nothing happens.');
  };

  $.fn.swapClass = function (class1, class2) {
    return this.each(function () {
      var $element = $(this);

      if ($element.hasClass(class1)) {
        $element.removeClass(class1).addClass(class2);
      } else if ($element.hasClass(class2)) {
        $element.removeClass(class2).addClass(class1);
      }
    });
  };

  $.fn.shadow = function (opts) {
    var options = $.extend({}, $.fn.shadow.defaults, opts);

    return this.each(function () {
      var $originalElement = $(this);
      for (var i = 0; i < options.copies; i++) {
        var offset = options.copyOffset(i);
        $originalElement
          .clone()
          .css({
            position: 'absolute',
            left: $originalElement.offset().left + offset.x,
            top: $originalElement.offset().top + offset.y,
            margin: 0,
            zIndex: -1,
            opacity: options.opacity
          })
          .appendTo('body');
      }
    });
  };

  $.fn.shadow.defaults = {
    copies: 5,
    opacity: 0.1,
    copyOffset: function (index) {
      return {
        x: index,
        y: index
      };
    }
  };
})(jQuery);

$(document).ready(function () {
  var $inventory = $('#inventory tbody');
  var quantities = $inventory.find('td:nth-child(2)')
    .map(function (index, qty) {
      return $(qty).text();
    }).get();
  // console.log(quantities);
  // console.log(quantities.get());

  var sum = $.mathUtils.sum(quantities);
  $('#sum').find('td:nth-child(2)').text(sum);

  var prices = $inventory.find('td:nth-child(3)')
    .map(function (index, qty) {
      return $(qty).text();
    }).get();

  var average = $.mathUtils.average(prices);
  $('#average').find('td:nth-child(3)').text(average.toFixed(2));

  // $('div').myMethod();

  $('table').click(function () {
    $('tr').swapClass('one', 'two');
  });

  $.fn.shadow.defaults.copies = 10;
  $('h1').shadow({
    copyOffset: function (index) {
      return {
        x: -index,
        y: index
      };
    }
  });
});