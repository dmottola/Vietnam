window.onload = function () {
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
    $('nav ul').toggleClass('showNav');
  });

  $('nav li').click(function(){
    $('#nav-icon3').toggleClass('open');
    $('nav ul').toggleClass('showNav');
  });

  $(".button-2010").click(function(){
    $(".date-2010").addClass("show").removeClass("hide");
    $(".defaultmap").addClass("hide").removeClass("show");
    $(".date-2013").addClass("hide").removeClass("show");
  });
  $(".button-2013").click(function(){
    $(".date-2013").addClass("show").removeClass("hide");
    $(".defaultmap").addClass("hide").removeClass("show");
    $(".date-2010").addClass("hide").removeClass("show");
  });
}

$(document).ready(function() {
  $("a[rel^='prettyPhoto']").prettyPhoto();
});
