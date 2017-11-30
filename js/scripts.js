$(document).ready(function() {
  var height = parseInt(prompt("What's your height?"));

  if (height < 150) {
    $(".tall").hide();
  }
  else if (height > 180) {
    $(".short").hide();
  }
})
