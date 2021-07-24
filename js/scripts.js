$(document).ready(function () {
  $(".clickable").click(function () {
    $(".showing").toggle();
    $(".hidden").toggle();
  });

  $(".clickable-2").click(function () {
    $(".showing-2").toggle();
    $(".hidden-2").toggle();
  });

   $(".clickable-3").click(function () {
     $(".showing-3").toggle();
     $(".hidden-3").toggle();
   });
});
