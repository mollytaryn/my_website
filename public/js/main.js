$(document).ready(function() {
   checkSize();
   $(window).resize(checkSize);
});

function checkSize() {
  if ($(".header").css("height") == "360px") {
    $("#dropDownAbout").click(function() {
      $(".aboutRight").toggle();
    });
    $("#dropDownSkills").click(function() {
      $(".skillsRight").toggle();
    });
    $("#dropDownPortfolio").click(function() {
      $(".portfolioRight").toggle();
    });
    $("#dropDownResume").click(function() {
      $(".resumeRight").toggle();
    });
  } else {
    $("#dropDownAbout").prop("disabled", true);
    $("#dropDownSkills").prop("disabled", true);
    $("#dropDownPortfolio").prop("disabled", true);
    $("#dropDownResume").prop("disabled", true);
  }
}
