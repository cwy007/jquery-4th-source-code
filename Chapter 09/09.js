// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function () {

  $('#topics a').click(function (event) {
    event.preventDefault(); // 阻止默认行为
    var topic = $(this).text();

    $('#topics a.selected').removeClass('selected'); // 去掉主题中，链接上的 selected 类
    $(this).addClass('selected'); // 为当前被点击元素添加 selected 类

    // $('#news tr').show();
    $('#news').find('tr').show();
    if (topic != 'All') { // #news tr:has(td) 包含实际内容的行
      // $('#news tr:has(td):not(:contains("' + topic + '"))').hide();
      $('#news').find('tr:has(td)').not(function () {
        return $(this).children(':nth-child(4)').text() == topic;
      }).hide();
    }
  });

  // 条纹效果
  // $('#news').find('tr:nth-child(even)').addClass('alt');
  $('#news tr').filter(function (index) {
    return (index % 4) < 2;
  }).addClass('alt');

});