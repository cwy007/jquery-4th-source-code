$(document).ready(function () {
  var $ajaxForm = $('#ajax-form'),
    $response = $('#response');

  $ajaxForm.on('submit', function (event) {
    event.preventDefault();
    $response.load('http://api.jquery.com/#content',
      $ajaxForm.serialize()); // serialize() 方法序列化后的 form value 可以用于URL查询字符串
  });
});