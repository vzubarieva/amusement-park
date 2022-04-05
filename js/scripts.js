$(document).ready(function () {
  const height = parseInt(prompt("What is your height in inches?"));

  if (height >= 120) {
    $(".ride-medium, .ride-tall").addClass("highlight");
  } else if (height >= 100) {
    $(".ride-short").addClass("highlight");
  }
});

