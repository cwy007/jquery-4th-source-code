// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

(function ($) {
  $.sum = function (array) {
    var total = 0;

    $.each(array, function (index, value) {
      value = $.trim(value);
      value = parseFloat(value) || 0;

      total += value;
    });
    return total;
  };

  $.average = function (array) {
    if ($.isArray(array)) {
      return $.sum(array) / array.length;
    }
    return '';
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

  var sum = $.sum(quantities);
  $('#sum').find('td:nth-child(2)').text(sum);
});