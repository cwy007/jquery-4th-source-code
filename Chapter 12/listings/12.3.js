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

    var rows = $table1.find('tbody > tr').each(function () {
      var key = $(this).children('td').eq(column).text();
      $(this).data('sortKey', $.trim(key).toUpperCase()); // this 指行；将比较用的 key先计算好，存起来
    }).get(); // get() 方法获取的是 dom 节点

    rows.sort(function (a, b) {
      var keyA = $(a).data('sortKey');
      var keyB = $(b).data('sortKey');
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });

    $.each(rows, function (index, row) {
      $table1.children('tbody').append(row); // 在视图上表示出来
    });
  });
});