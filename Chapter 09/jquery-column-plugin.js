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

(function ($) {
  $.fn.column = function () {
    var $cells = $();
    this.each(function () {
      var $td = $(this).closest('td, th'); // 返回一个最近的祖先元素 ancestor，（该方法向上遍历时，也会包含自身）
      // console.log($td);
      if ($td.length) {
        // console.log('length')
        var colNum = $td[0].cellIndex + 1;
        var $columnCells = $td.closest('table').find('td, th').filter(':nth-child(' + colNum + ')');
        // console.log($columnCells);
        $cells = $cells.add($columnCells); // $cells.add() 不会改变 $cells 变量本身，所以要加上一个赋值操作
        // console.log($cells)
      }
    });
    // console.log('column() method is called')
    // console.log(this.pushStack($cells));
    return this.pushStack($cells);
  };
})(jQuery);