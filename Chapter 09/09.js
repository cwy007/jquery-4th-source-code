// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

(function ($) {
  $.extend($.expr[':'], {
    group: function (element, index, matches, set) {
      var num = parseInt(matches[3], 10); // 这里的 10 表示 10进制
      if (isNaN(num)) { // isNaN  是一个全局方法，会将参数转换为数字，若为 NaN，返回 true，否则，返回 false； 与 Number.isNaN() 方法不同，后者不会将参数转换为数字
        return false;
      }
      // console.log(index % (num * 2) < num);
      // console.log($(element).data('index'));
      // console.log(index); // 这里的 index 怎么一直是 0 ？
      // console.log(set);
      // console.log(num);
      return $(element).data('index') % (num * 2) < num; // 从 data 属性中取出对应的索引值
    }
  });
})(jQuery);

$(document).ready(function () {

  // $('#topics a').click(function (event) {
  //   event.preventDefault(); // 阻止默认行为
  //   var topic = $(this).text();

  //   $('#topics a.selected').removeClass('selected'); // 去掉主题中，链接上的 selected 类
  //   $(this).addClass('selected'); // 为当前被点击元素添加 selected 类

  //   // $('#news tr').show();
  //   $('#news').find('tr').show();
  //   if (topic != 'All') { // #news tr:has(td) 包含实际内容的行
  //     // $('#news tr:has(td):not(:contains("' + topic + '"))').hide();
  //     $('#news').find('tr:has(td)').not(function () {
  //       return $(this).children(':nth-child(4)').text() == topic;
  //     }).hide();
  //   }
  // });

  // 条纹效果
  // $('#news').find('tr:nth-child(even)').addClass('alt');
  // $('#news tr').filter(function (index) {
  //   return (index % 4) < 2;
  // }).addClass('alt');

  // $('#news tbody').each(function () {
  //   $(this).children().has('td').filter(function (index) {
  //     return (index % 4) < 2;
  //   }).addClass('alt');
  // });

  function stripe() {
    $('#news').find('tr.alt').removeClass('alt');
    $('#news tbody').each(function () {
      $(this).children(':visible').has('td').each(function (index) {
        $(this).data('index', index)
      }).filter(':group(4)').addClass('alt'); // :group() 为自定义的伪类选择符
    });
  }
  // .filter(function (index) {
  //   return (index % 4) < 2;
  // }).addClass('alt');

  stripe(); // 条纹

  $('#topics a').click(function (event) {
    event.preventDefault();
    var topic = $(this).text();

    $('#topics a.selected').removeClass('selected');
    $(this).addClass('selected'); // 主题链接的 类

    $('#news').find('tr').show(); // 筛选（先显示全部的 tr，然后，根据条件隐藏部分 tr）
    if (topic != 'All') {
      $('#news').find('tr:has(td)').not(function () {
        return $(this).children(':nth-child(4)').text() == topic;
      }).hide();
    }

    stripe(); // 条纹
  });

  $(document).ready(function () {
    var $cell = $('#release').nextAll();
    $cell.addClass('highlight');
    console.log($cell);
    console.log($cell.context);
    console.log($cell.selector);
    console.log($cell.prevObject);
  });

});