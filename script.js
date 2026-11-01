$(document).ready(function () {
  console.log("jQuery is ready!")});

function task1() {
  $("h2").css("letter-spacing", "0.5px");
  $("#my-name").css({ color: "rgb(216, 176, 176)", fontSize: "40px" });
  $(".intro").css("font-style", "italic");
  var greetings = [
    "Future Developer",
    "About Me",
    "Student of Astana IT University"
  ];
  var greetIndex = 0;
  $("#btn-greeting").click(function () {
    greetIndex = (greetIndex + 1) % greetings.length;
    $("#headline").text(greetings[greetIndex]);                   
    $(".welcome").html("Welcome to My <b>jQuery</b> Portfolio!"); 
  });
  $("#btn-style").click(function () {
    $(".intro").css({
      backgroundColor: "beige",
      color: "gray",
      padding: "10px",
      borderRadius: "6px"
    });
    $("p:first").css("font-weight", "bold");
  });
    $("#btn-dark").click(function () {
    $("#profile").addClass("dark");
  });
  $("#btn-light").click(function () {
    $("#profile").removeClass("dark");
  });
}
$(document).ready(task1);

function task2() {
  $("#btn-hide").click(function () {
    $("#fun-facts").hide(400);
  });
  $("#btn-show").click(function () {
    $("#fun-facts").show(400);
  });
  $("#btn-toggle").click(function () {
    $("#fun-facts").toggle(400);
  });
}
$(document).ready(task2);

function task3() {
  $("#btn-fadein").click(function () {
    $(".gallery-img").fadeIn(800);
  });
  $("#btn-fadeout").click(function () {
    $(".gallery-img").fadeOut(800);
  });
  $("#btn-fadetoggle").click(function () {
    $(".gallery-img").fadeToggle(800);
  });
  $(".gallery-img").click(function () {
    $(this).fadeTo(400, $(this).css("opacity") == 1 ? 0.5 : 1);
  });
}
$(document).ready(task3);

function task4() {
  $(".acc-heading").click(function () {
    $(this).next(".acc-panel").slideToggle(400);
  });
  $("#btn-slidedown").click(function () {
    $(".acc-panel").slideDown(400);
  });
  $("#btn-slideup").click(function () {
    $(".acc-panel").slideUp(400);
  });
}
$(document).ready(task4);

function task5() {
  $("#btn-add").click(function () {
    var skill = $("#skill-input").val().trim();
    if (skill === "") {
      $("#skill-message").text("Please enter a skill!");
      return;
    }
    $("#skill-list").append("<li>" + skill + "</li>");
    $("#skill-input").val("");
    $("#skill-message").text("");
  });
  $("#btn-prepend").click(function () {
    var skill = $("#skill-input").val().trim();
    if (skill === "") {
      $("#skill-message").text("Please enter a skill!");
      return;
    }
    $("#skill-list").prepend("<li>" + skill + "</li>");
    $("#skill-input").val("");
    $("#skill-message").text("");
  });
  $("#btn-remove").click(function () {
    $("#skill-list li:last").remove();
    $("#skill-message").text("");
  });
}
$(document).ready(task5);

function task6() {
  var isGithub = true;
  $("#btn-change-link").click(function () {
    if (isGithub) {
      $("#social-link").attr("href", "https://www.instagram.com/wishiwereey/").text("Instagram");
    } else {
      $("#social-link").attr("href", "https://github.com/wishiwereey").text("GitHub");
    }
    isGithub = !isGithub;
    console.log("New link: " + $("#social-link").attr("href"));
  });
}
$(document).ready(task6);

function task7() {
  $("#name-input").keyup(function () {
    var name = $(this).val();
    $("#preview-name").text(name);
  });
  $("#email-input").keyup(function () {
    var email = $(this).val();
    $("#preview-email").text(email);
  });
}
$(document).ready(task7);

function task8() {
  var barsFilled = false;
  $("#btn-animate").click(function () {
    if (!barsFilled) {
      $(".bar").each(function () {
        $(this).animate({ width: $(this).data("level") }, 1200);
      });
    } else {
      $(".bar").animate({ width: "0%" }, 800);
    }
    barsFilled = !barsFilled;
  });
}
$(document).ready(task8);