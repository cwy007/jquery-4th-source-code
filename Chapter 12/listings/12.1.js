/************************************************
  Table 1: Sorting by parsing cell contents.
************************************************/
$(document).ready(function () {
  var $table1 = $('#t-1');
  var $headers = $table1.find('thead th').slice(1); // $.fn.slice(start, end), 从选中的元素集合中取出一个子集，第一个数字表示开始的索引
  $headers
    .wrapInner('<a href="#"></a>') // 用新的元素包裹住选中元素的内容
    .addClass('sort'); // 给 th 添加一个类 sort，用以区分外观
});