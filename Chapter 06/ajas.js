$.ajax({
  url: 'a.html',
  success: function (data) {
    $('#dictionary').html(data);
  }
});

$.ajaxSetup({
  url: 'a.html',
  type: 'POST',
  dataType: 'html'
});

$.ajax({
  type: 'GET',
  success: function (data) {
    $('#dictionary').html(data);
  }
});