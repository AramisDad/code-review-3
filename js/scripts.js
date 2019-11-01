// business logic
$(document).ready(function()  {
  $("form#userForm").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#userInput").val());
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var userRange = [];

    for (var index = 0; index <= userInput; index++) {
      userRange.push(index);
    }
    console.log(userRange);

    var beepBoop = function()  {
      if (!(numbers.includes(userInput))) {
        alert("Whoops! Please use numeric characters to enter an integer");
      } else  {
        return userRange;
      }
    }
    var result = beepBoop(userRange);
    console.log(result);
    $("#result").text(result);
  });
});
