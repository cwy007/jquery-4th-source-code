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
  });

});