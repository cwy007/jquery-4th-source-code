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
    $speech.animate({
      'fontSize': num + 'px'
    }, 'slow');
  });

  var $secondPara = $('p').eq(1);
  $secondPara.hide();
  $('a.more').click(function (event) {
    event.preventDefault();
    // $secondPara.slideToggle('slow');
    $secondPara.animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 'slow');
    var $link = $(this);
    if ($link.text() == 'read more') {
      $link.text('read less');
    } else {
      $link.text('read more');
    }
  });

  $('div.label').click(function () {
    var paraWidth = $('div.speech p').outerWidth();
    var $switcher = $(this).parent();
    var switcherWidth = $switcher.outerWidth();
    $switcher.animate({
      borderWidth: '5px',
      left: paraWidth - switcherWidth,
      height: '+=20px'
    }, 'slow');
  });
});