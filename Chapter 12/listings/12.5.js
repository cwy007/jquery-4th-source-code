/************************************************
  Table 1: Sorting by parsing cell contents.
************************************************/
$(document).ready(function () {
  var $table1 = $('#t-1');
  var $headers = $table1.find('thead th').slice(1);
  $headers
    .each(function () {
      var keyType = this.className.replace(/^sort-/, ''); // replace() 方法，js 自带的
      $(this).data('keyType', keyType); // this 在这里指 dom 节点
    })
    .wrapInner('<a href="#"></a>') // 给标题文本加上链接
    .addClass('sort'); // 给标题单元格加上类 sort

  var sortKeys = { // 声明一个对象，包含三个排序算法：接受一个 jQuery 对象，返回一个排序标识 key
    alpha: function ($cell) {
      var key = $cell.find('span.sort-key').text() + ' ';
      key += $.trim($cell.text()).toUpperCase();
      return key;
    },
    numeric: function ($cell) {
      var num = $cell.text().replace(/^[^\d.]*/, ''); // 去掉开头的非数字字符 $ 和小数点 '.'
      var key = parseFloat(num);
      if (isNaN(key)) { // 当解析不出数值时，将 key 设为 0
        key = 0;
      }
      return key;
    },
    date: function ($cell) {
      var key = Date.parse('1 ' + $cell.text()); // 由于视图上只包含月和年，这里的 1 是为了补充 ‘日’，这是方法 Date.parse() 所要求的
      return key;
    }
  };

  $headers.on('click', function (event) {
    event.preventDefault();
    var column = $(this).index();

    var rows = $table1.find('tbody > tr').each(function () {
      var $cell = $(this).children('td').eq(column);
      var key = $cell.find('span.sort-key').text() + ' ';
      key += $.trim($cell.text()).toUpperCase();
      $(this).data('sortKey', key);
    }).get();

    rows.sort(function (a, b) {
      var keyA = $(a).data('sortKey');
      var keyB = $(b).data('sortKey');
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });

    $.each(rows, function (index, row) {
      $table1.children('tbody').append(row);
    });
  });
});