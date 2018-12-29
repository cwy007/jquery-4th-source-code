// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function () {
  var $inventory = $('#inventory tbody');
  var quantities = $inventory.find('td:nth-child(2)')
    .map(function (index, qty) {
      return $(qty).text();
    }).get();
  // console.log(quantities);
  // console.log(quantities.get());

  var sum = $.mathUtils.sum(quantities);
  $('#sum').find('td:nth-child(2)').text(sum);

  var prices = $inventory.find('td:nth-child(3)')
    .map(function (index, qty) {
      return $(qty).text();
    }).get();

  var average = $.mathUtils.average(prices);
  $('#average').find('td:nth-child(3)').text(average.toFixed(2));

  // $('div').myMethod();

  $('table').click(function () {
    $('tr').swapClass('one', 'two');
  });

  $.fn.shadow.defaults.copies = 10;
  $('h1').shadow({
    copyOffset: function (index) {
      return {
        x: -index,
        y: index
      };
    }
  });

  // 自带组件 & 自定义组件
  // $('a').tooltip({offsetX: -10, offsetY: 25}); // 实例化
  $('a').tooltip(); // 先实例化
  $('a').tooltip('option', 'offsetX', 20); // 实例化后访问 option

  $('a').tooltip('disable');  // 禁用
  $('a').tooltip('enable');   // 启用

  // $('a').tooltip('open');   // 手动打开提示条
  // $('a').tooltip('close');   // 手动关闭提示条

  // $.myPlugin 扩展 jQuery
  // $.fn.myPlugin 扩展 jQuery 原型

  // 命名空间
  // $
  // $.myPlugin, $.myPlugin.publicMethod, $.fn.myPlugin.plugin
  // $.fn.myPlugin.defaults = {}
  // var options = $.extend({}, $.fn.shadow.defaults, opts);

});