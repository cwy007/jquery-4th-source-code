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
            // ========== 练习2
            zIndex: options.zIndex,
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
    },
    // ========== 练习2添加
    zIndex: -1
  };
})(jQuery);

// 03
(function ($) { // $ 在这里为一个局部变量
  $.widget('ljq.tooltip', { // 命名空间的概念 ljq。tooltip 为组件名
    options: {
      offsetX: 10,
      offsetY: 10,
      content: function() {
        return $(this).data('tooltip-text');
      }
    },

    _create: function () {
      this.isTooltipOpen = false;
      this._tooltipDiv = $('<div></div>')
        .addClass('ljq-tooltip-text ui-widget ui-state-highlight ui-corner-all')
        .hide().appendTo('body');
      this.element
        .addClass('ljq-tooltip-trigger')
        .on('mouseenter.ljq-tooltip', $.proxy(this._open, this)) // $.proxy() 方法会改变 this 上下文，是的 _open 方法可以访问组件实例
        .on('mouseleave.ljq-tooltip', $.proxy(this._close, this));
    },

    destroy: function () {
      this._tooltipDiv.remove();
      this.element
        .removeClass('ljq-tooltip-trigger')
        .off('.ljq-tooltip');
      $.Widget.prototype.destroy.apply(this, arguments); // 调用保存在原型对象 prototype 中的 destroy 方法
    },

    open: function () { // 共有函数（子方法）
      this._open();
    },

    close: function () { // 手动关闭方法
      this._close();
    },

    _open: function () { // 内部方法或属性，以下划线开头
      if (!this.options.disabled) { // 启用或禁用部件
        var elementOffset = this.element.offset(); // offset() 会返回第一个匹配元素相对于 document 位移对象 { top: value1, left: value2 }
        this._tooltipDiv.css({
          position: 'absolute',
          left: elementOffset.left + this.options.offsetX,
          top: elementOffset.top + this.element.height() + this.options.offsetY // 位于最初选择元素的下方
        }).text(this.options.content.call(this.element[0]));
        this._tooltipDiv.show();
        this.isTooltipOpen = true;
        this._trigger('open');
        // ========== 练习5
        if (this.options.effect) {
          this._tooltipDiv.effect(this.options.effect, {distance: 10, duration: 80});
        }
      }
    },

    _close: function () {
      this._tooltipDiv.hide();
      this.isTooltipOpen = false;
      this._trigger('close');
    },

    // ========== 练习2
    isOpen: function () {
      return this.isTooltipOpen;
    },
  });
})(jQuery);