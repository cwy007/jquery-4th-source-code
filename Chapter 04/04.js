// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function () {
  var $speech = $('div.speech');
  var defaultSize = $speech.css('fontSize');

  $('#switcher button').click(function () {
    var num = parseFloat($speech.css('fontSize'));
    switch (this.id) {
      case 'switcher-large':
        num *= 1.4;
        break; // 没有 break 时，会一直执行到 switch 语句的结尾
      case 'switcher-small':
        num /= 1.4;
        break;
      default:
        num = parseFloat(defaultSize);
    }
    $speech.css('fontSize', num + 'px');
  });

  $('p').eq(1).hide();
  $('a.more').click(function (event) {
    event.preventDefault();
    $('p').eq(1).show();
    $(this).hide();
  });
});