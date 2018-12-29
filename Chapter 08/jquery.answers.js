// 01
(function ($) {
  $.fn.slideFadeIn = function () {
    return this.each(function () {
      $(this).slideDown('slow').fadeTo('slow', 1); // 用 fadeIn() 效果不明显
    });
  };

  $.fn.slideFadeOut = function () {
    return this.each(function () {
      $(this).fadeTo('slow', 0.5).slideUp('slow'); // 用 fadeOut() 效果不明显
    });
  };
})(jQuery);
