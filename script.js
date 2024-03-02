$(document).ready(function(){
    $("#button").click(function(){
      var value = $("#value").val();
      if(value === "1") {
        $("#box").css("background-color", "red");
      } else if(value === "2") {
        $("#box").css("background-color", "blue");
      } else if(value === "3") {
        $("#box").css("background-color", "green");
      }
    });
  });