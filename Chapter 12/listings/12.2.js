/************************************************
  Table 1: Sorting by parsing cell contents.
************************************************/
$(document).ready(function () {
  var $table1 = $('#t-1');
  var $headers = $table1.find('thead th').slice(1);
  $headers
    .wrapInner('<a href="#"></a>')
    .addClass('sort');

  $headers.on('click', function (event) {
    event.preventDefault();
    var column = $(this).index();
    var rows = $table1.find('tbody > tr').get(); // get() 没有指定参数，和指定参数时效果不一样
    rows.sort(function (a, b) {
      var keyA = $(a).children('td').eq(column).text(); // eq()
      keyA = $.trim(keyA).toUpperCase(); // $.trim(), es5 中也包含这个方法 string.trim()
      var keyB = $(b).children('td').eq(column).text();
      keyB = $.trim(keyB).toUpperCase(); // toUpperCase() javascript 方法

      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });

    $.each(rows, function (index, row) {
      $table1.children('tbody').append(row); // append()
    });
  });
});