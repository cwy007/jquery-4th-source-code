// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function () {
  $('#letter-a a').click(function (event) {
    event.preventDefault();
    $('#dictionary').load('a.html');
    alert('Loaded!');
  });

  $('#letter-b a').click(function () {
    event.preventDefault();
    $.getJSON('b.json', function (data) {
      var html = '';
      $.each(data, function (_entryIndex, entry) {
        html += '<div class="entry">';
        html += '<h3 class="term">' + entry.term + '</h3>';
        html += '<div class="part">' + entry.part + '</div>';
        html += '<div class="definition">';
        html += entry.definition;
        if (entry.quote) {
          html += '<div class="quote">';
          $.each(entry.quote, function (_lineIndex, line) {
            html += '<div class="quote-line">' + line + '</div>';
          });
          if (entry.author) {
            html += '<div class="quote-author">' + entry.author + '</div>';
          }
          html += '</div>';
        }
        html += '</div>';
        html += '</div>';
      });
      $('#dictionary').html(html);
    });
  });
});