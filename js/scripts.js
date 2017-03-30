 // -----------Business Logic ---------------


  // -----------User Logic ---------------
  $(function() {

    $("form").submit(function(event) {
      event.preventDefault();
      var userInput = $("#userInput").val();
      var array = userInput.split("");
      array = array.filter(function(str) {
        return /\S/.test(str);
      });
      console.log("This is the og; " + array);
      var length = array.length;
      var numOfColumns = Math.ceil(Math.sqrt(length));

      console.log("This is the length: " + length);
      console.log("This is square root of the length: " + Math.sqrt(length));
      console.log("This is square root of the length rounded up: " + Math.ceil(Math.sqrt(length)));

      //comes into one string without spaces, but with commas
      var oneString = array.toString();

      //remove commas
      oneString = oneString.replace(/,/g , "");

      //split up into n-length words
      oneString = oneString.replace(/(.{5})/g, "$ ");

      console.log("This is our NEW with Regex joined oneString Array:" + oneString);

      // console.log(arrayBySplit);

      $("form").hide();
      $("#result").show();

    });//ends the submit function

    //reload button function
    $("#reload").click(function(){
      location.reload();
    });
    //ends the doc ready function
  });
