// 01
(function ($) {
  $.mathUtils = {
    sum: function (array) {
      var total = 0;

      $.each(array, function (index, value) {
        value = $.trim(value);
        value = parseFloat(value) || 0;

        total += value;
      });
      return total;
    },

    average: function (array) {
      if ($.isArray(array)) {
        return $.mathUtils.sum(array) / array.length;
      }
      return '';
    }
  }
})(jQuery);

// 02
(function ($) {
  $.fn.myMethod = function () {
    alert('Nothing happens.');
  };

  $.fn.swapClass = function (class1, class2) {
    return this.each(function () {
      var $element = $(this);

      if ($element.hasClass(class1)) {
        $element.removeClass(class1).addClass(class2);
      } else if ($element.hasClass(class2)) {
        $element.removeClass(class2).addClass(class1);
      }
    });
  };

  $.fn.shadow = function (opts) {
    var options = $.extend({}, $.fn.shadow.defaults, opts);

    return this.each(function () {
      var $originalElement = $(this);
      for (var i = 0; i < options.copies; i++) {
        var offset = options.copyOffset(i);
        $originalElement
          .clone()
          .css({
            position: 'absolute',
            left: $originalElement.offset().left + offset.x,
            top: $originalElement.offset().top + offset.y,
            margin: 0,
            zIndex: -1,
            opacity: options.opacity
          })
          .appendTo('body');
      }
    });
  };

  $.fn.shadow.defaults = {
    copies: 5,
    opacity: 0.1,
    copyOffset: function (index) {
      return {
        x: index,
        y: index
      };
    }
  };
})(jQuery);

// 03
(function($) {
  $.widget('ljq.tooltip', { // 命名空间的概念 ljq。tooltip 为组件名
    _create: function() {
      this._tooltipDiv = $('<div></div>')
        .addClass('ljq-tooltip-text ui-widget ui-state-highlight ui-corner-all')
        .hide().appendTo('body');
      this.element
        .addClass('ljq-tooltip-trigger')
        .on('mouseenter.ljq-tooltip', $.proxy(this._open, this)) // $.proxy() 方法会改变 this 上下文，是的 _open 方法可以访问组件实例
        .on('mouseleave.ljq-tooltip', $.proxy(this._close, this));
    },

    _open: function() { // 内部方法或属性，以下划线开头
      var elementOffset = this.element.offset(); // offset() 会返回第一个匹配元素相对于 document 位移对象 { top: value1, left: value2 }
      this._tooltipDiv.css({
        position: 'absolute',
        left: elementOffset.left,
        top: elementOffset.top + this.element.height() // 位于最初选择元素的下方
      }).text(this.element.data('tooltip-text'));
      this._tooltipDiv.show();
    },

    _close: function() {
      this._tooltipDiv.hide();
    }
  });
})(jQuery);
