$(document).ready(function() {
  $('#cryptoForm').submit(function(event) {
    var inputString = $('textarea').val();
    alert(inputString);
  });
});
