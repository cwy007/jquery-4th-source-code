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
      console.log('aa');
    };
  };

  $('#switcher').on('click', toggleSwitcher);

  $('#switcher button').click(function () {
    $('#switcher').off('click', toggleSwitcher);
    if (this.id == 'switcher-default') {
      $('#switcher').on('click', toggleSwitcher);
    }
  });
});