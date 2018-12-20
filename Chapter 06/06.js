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

  $('#letter-c a').click(function (event) {
    event.preventDefault();
    $.getScript('c.js');
  });

  $('#letter-d a').click(function (event) {
    event.preventDefault();
    $.get('d.xml', function (data) {
      $('#dictionary').empty();
      $(data).find('entry:has(quote[author])').each(function () {
        var $entry = $(this);
        var html = '<div class="entry">';
        html += '<h3 class="term">' + $entry.attr('term');
        html += '</h3>';
        html += '<div class="part">' + $entry.attr('part');
        html += '</div>';
        html += '<div class="definition">';
        html += $entry.find('definition').text();
        var $quote = $entry.find('quote');
        if ($quote.length) {
          html += '<div class="quote">';
          $quote.find('line').each(function () {
            html += '<div class="quote-line">';
            html += $(this).text() + '</div>';
          });
          if ($quote.attr('author')) {
            html += '<div class="quote-author">';
            html += $quote.attr('author') + '</div>';
          }
          html += '</div>';
        }
        html += '</div>';
        html += '</div>';
        $('#dictionary').append($(html));
      });
    });
  });

  // 01
  // $('#dictionary').load('exercises-content.html .letter');

  // 02
  // $('.letter').hover(function () {
  //   $('#dictionary').load('exercises-content.html #' + $(this).attr('id'));
  // }, function () {
  //   $('#dictionary').html('');
  // });

  // 03
  $('.letter').hover(function () {
    $('#dictionary').load('does-not-exist.html #' + $(this).attr('id'), function (_response, status, xhr) {
      // console.log(_response);
      // console.log(status);
      if (status === 'error') {
        $('#dictionary').html('错误：' + xhr.status).append(xhr.responseText);
        // console.log(xhr);
      } else {
        $('#dictonary').html(xhr.responseText);
      }
    });
  }, function () {
    $('#dictionary').html('');
  });

  // 04
  var repoURL = 'https://api.github.com/users/cwy007/repos';
  $.getJSON(repoURL + '?callback=?', function (response) {
    // console.log(response);

    var html = '';
    $.each(response.data, function (_entryIndex, entry) {
      html += '<div class=\"entry\">';
      //给内容加上 term、part 类，是为了直接使用样式表中的样式
      html += '<div class=\"repoName term\">' + entry.name + '</div>';
      html += '<div class=\"repoURL part\">' + '<a href=\"' + entry.url + '\">' + entry.url + '</a>' + '</div>';
      html += '</div>';
    });
    $('#dictionary').html(html);
  });
});