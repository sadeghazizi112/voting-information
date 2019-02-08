$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 21) {
    $('#info1').show();
    $('#info2').hide();
  }
  else if ((age >= 18) && (age < 21)) {
    $('#info2').show();
    $('#info1').hide();
  }

  else {
    $('#under-18').show();
  }
});
