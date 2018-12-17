// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function () {
  $('div.chapter a[href*="wikipedia"]').attr({
    rel: 'external',
    title: function () {
      return 'Learn more about ' + $(this).text() + ' at Wikipedia.';
    },
    id: function (index, _oldValue) {
      return 'wikilink-' + index;
    }
  });

  $('<a href="#top">back to top</a>').insertAfter('div.chapter p');
  $('<a id="top"></a>').prependTo('body');

  $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
  $('span.footnote').each(function (index) {
    $(this)
      .before('<sup>' + (index + 1) + '</sup>')
      .appendTo($notes)
      .wrap('<li></li>');
  });
});