// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
jQuery.fn.myMethod = function () {
  alert('Nothing happens.');
};

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

  $('div').myMethod();
});