$(document).ready(function () {
  var $ajaxForm = $('#ajax-form'),
    $response = $('#response');

  $ajaxForm.on('submit', function (event) {
    event.preventDefault();

    $.ajax({
      url: 'http://book.learningjquery.com/api/',
      dataType: 'jsonp', // jsonp: 简单的 json 加上 服务器支持；绕过浏览器的同源策略，从不同的服务器上请求数据
      data: {
        title: $('#title').val() // input 的 value
      },
      success: function (data) {
        console.log(data);
      }
    });
  });
});