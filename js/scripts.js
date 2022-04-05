$(document).ready(function() {
  const height = parseInt(prompt("What is your height in inches?"));

  if ( height >= 42) {
    $('#rides').show();
  }
});