// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$.fn.cycle.defaults.timeout = 10000;
$.fn.cycle.defaults.random = true;

$(document).ready(function () {
  $('#books').cycle({
    timeout: 2000,
    speed: 200,
    pause: true
  });

  var $books = $('#books');
  var $controls = $('<div id="books-controls"></div>');
  $controls.insertAfter($books);
  $('<button>Pause</button>').click(function (event) {
    event.preventDefault();
    $books.cycle('pause');
    $.cookie('cyclePaused', 'y');
    // console.log($.cookie('cyclePaused'))
  }).appendTo($controls);
  $('<button>Resume</button>').click(function (event) {
    event.preventDefault();
    $('ul:paused').cycle('resume');
    $.cookie('cyclePaused', null);
  }).appendTo($controls);

  if ($.cookie('cyclePaused')) {
    $books.cycle('pause');
  }

  $books.hover(function () {
    $books.find('.title').animate({
      backgroundColor: '#eee',
      color: '#000'
    }, 1000);
  }, function () {
    $books.find('.title').animate({
      backgroundColor: '#000',
      color: '#fff'
    }, 1000);
  });

  $('h1').click(function () {
    $(this).toggleClass('highlighted', 'slow');
  });
});