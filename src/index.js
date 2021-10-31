import "./styles.css";

$(document).ready(function () {
  $("#bar").click(function () {
    if ($(this).hasClass("expand")) {
      $("ul").slideUp(function () {
        $("#bar").removeClass("expand");
      });
    } else {
      $(this).addClass("expand");
      setTimeout(function () {
        $(".fas").addClass("expand");
        $("ul").stop().slideDown();
      }, 200);
    }
    if ($("#icon").hasClass("fa-angle-up")) {
      $("#icon").removeClass("fa-angle-up");
      $("#icon").addClass("fa-angle-down");
    } else {
      $("#icon").removeClass("fa-angle-down");
      $("#icon").addClass("fa-angle-up");
    }
  });
});
