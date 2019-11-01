// business logic
$(document).ready(function()  {
  $("form#userForm").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#userInput").val());
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    var beepBoop = function(userInput)  {
      if (!(numbers.includes(userInput))) {
        alert("Whoops! Please use numeric characters to enter an integer");
      }
    }

    var result = beepBoop(userInput);
    $("#result").text();
  });
});
