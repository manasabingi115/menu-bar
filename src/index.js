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

// var item = document.getElementsByClassName("list-items");
// // console.log(item);
// // console.log(item[1]);
// // item[1].style.textDecoration = "underline";
// item[1].textContent = "hi";
// // item[1].backgroundColor="yellow";
// // for (var i = 1; i <= item.length; i++) {
// //   item[i].style.textDecoration = "underline";
// // }
// // console.log(item[1].value);

// var head = document.getElementById("app");
// // console.log(head);
// head.style.backgroundColor = "red";
// var body = document.getElementsByTagName("body");
// // console.log(body);
// var marker = document.getElementById("unLine");
// // console.log(marker);
// // console.log(marker[1]);

// var input = document.getElementsByClassName("inp");
// // console.log(input);
// input.innerHTML = "number";
// var submit = document.querySelector('input[type]');
// submit.innerHTML="hi";
