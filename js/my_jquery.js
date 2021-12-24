$(function () {
  $("#top-left").hover(function () {
    $("input:text").val("top-left");
    $(this).toggleClass("top-left");
  });
  $("#top-middle").hover(function () {
    $("input:text").val("top-middle");
  });
  $("#top-right").hover(function () {
    $("input:text").val("top-right");
    $(this).toggleClass("top-right");
  });
  $("#left-middle").hover(function () {
    $("input:text").val("left-middle");
  });
  $("#center").hover(function () {
    $("input:text").val("center");
  });
  $("#right-middle").hover(function () {
    $("input:text").val("right-middle");
  });
  $("#bottom-left").hover(function () {
    $("input:text").val("bottom-left");
    $(this).toggleClass("bottom-left");
  });
  $("#bottom-middle").hover(function () {
    $("input:text").val("bottom-middle");
  });
  $("#bottom-right").hover(function () {
    $("input:text").val("bottom-right");
    $(this).toggleClass("bottom-right");
  });

  $("#fed-in").on("click", function () {
    $("#widget").fadeIn(3000, function () {
      alert("Enjoy !!!!");
    });
  });
});
