var start = 501
var player1score = start;
var player2score = start;
var in1 = document.getElementById('darts');
var in2 = document.getElementById('darts2');

$('#input').submit(function(e) {
  e.preventDefault();
  var darts = parseInt(in1.value)
  player1score = (player1score - darts)
  $('#player1').append('<li>'+(player1score)+'</li>');
  // success(clearForm);
});

$('#input2').submit(function(e) {
  e.preventDefault();
  var darts2 = parseInt(in2.value)
  player2score = (player2score - darts2)
  $('#player2').append('<li>'+(player2score)+'</li>');
});

function clearForm() {
  $('#number').val('');
}