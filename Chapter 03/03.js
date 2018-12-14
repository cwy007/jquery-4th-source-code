// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function () {
  // Enable hover effect on the style switcher
  $('#switcher').hover(function () {
    $(this).addClass('hover');
  }, function () {
    $(this).removeClass('hover');
  });

  // Allow the style switcher to expand and collapse.
  var toggleSwitcher = function (event) {
    if (!$(event.target).is('button')) {
      $('#switcher button').toggleClass('hidden');
      // console.log('aa');
    };
  };

  $('#switcher').on('click', toggleSwitcher);
  $('#switcher').click();

  $('#switcher button').click(function () {
    $('#switcher').off('click', toggleSwitcher);
    if (this.id == 'switcher-default') {
      $('#switcher').on('click', toggleSwitcher);
    }
  });

  var setBodyClass = function (className) {
    $('body').removeClass().addClass(className);
    $('#switcher button').removeClass('selected');
    $('#switcher-' + className).addClass('selected');
    $('#switcher').off('click', toggleSwitcher);
    if (className == 'default') {
      $('#switcher').on('click', toggleSwitcher);
    }
  };

  $('#switcher-default').addClass('selected');

  var triggers = {
    D: 'default',
    N: 'narrow',
    L: 'large'
  };

  // 事件委托
  $('#switcher').click(function (event) {
    if ($(event.target).is('button')) {
      var bodyClass = event.target.id.split('-')[1];
      setBodyClass(bodyClass);
    }
  });

  $(document).keyup(function (event) {
    var key = String.fromCharCode(event.which);
    // console.log(key);
    if (key in triggers) {
      $('#switcher-' + triggers[key]).click();
    }
  });

  // 练习
  $('.author').click(function () {
    $(this).toggleClass('selected');
  })
});