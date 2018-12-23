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
    var defaults = {
      copies: 5,
      opacity: 0.1
    };
    var options = $.extend(defaults, opts);

    return this.each(function () {
      var $originalElement = $(this);
      for (var i = 0; i < options.copies; i++) {
        $originalElement
          .clone()
          .css({
            position: 'absolute',
            left: $originalElement.offset().left + i,
            top: $originalElement.offset().top + i,
            margin: 0,
            zIndex: -1,
            opacity: options.opatity
          })
          .appendTo('body');
      }
    });
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

  $('h1').shadow({
    copies: 3,
    opacity: 0.25
  });
});