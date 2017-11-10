$(document).ready(function() {
  var backgrounder = $(".backgrounder").mouseover(function() {
    $("body").css("background-color", $(this).attr("data-bgcolor"));
    $("body *").css("color", "white");
    $("body *").css("border-color", "white");
  });
});
