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