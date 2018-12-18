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

  // $('<a href="#top">back to top</a>').insertAfter('div.chapter p');
  // $('<a id="top"></a>').prependTo('body');

  // 01
  $('div.chapter p').each(function (index) {
    if (index >= 3) {
      $(this).after('<a href="#top">back to top</a>');
    }
  });
  $('<a id="top"></a>').prependTo('body');

  // 02
  $('a[href*="#top"]').click(function (event) {
    // console.log(event.target);
    var clickedLink = event.target;
    $('.scrollLocationTip').remove();
    $('<p class=\"scrollLocationTip\">you were here</p>').insertAfter(clickedLink);
    event.stopPropagation();
  });
  $('body').click(function (event) {
    $('.scrollLocationTip').remove();
  });

  $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
  $('span.footnote').each(function (index) {
    $(this)
      .before([
        '<a href="#footnote-',
        index + 1,
        '" id="context-',
        index + 1,
        '" class="context">',
        '<sup>',
        index + 1,
        '</sup></a>'
      ].join(''))
      .appendTo($notes)
      .append([
        '&nbsp;(<a href="#context-',
        index + 1,
        '">context</a>)'
      ].join(''))
      .wrap('<li id="footnote-' + (index + 1) + '"></li>');
  });

  $('span.pull-quote').each(function (index) {
    var $parentParagraph = $(this).parent('p');
    $parentParagraph.css('position', 'relative');
    var $cloneCopy = $(this).clone();
    $cloneCopy
      .addClass('pulled')
      .find('span.drop')
      .html('&hellip;') // html() 方法有参数时，会替换元素的内容
      .end()            // end() 方法，重新返回元素集合
      .text($cloneCopy.text())
      .prependTo($parentParagraph);
  });

});