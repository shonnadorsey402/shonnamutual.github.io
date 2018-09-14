$(document).ready(function(){
  $("#hideimage").fadeIn(300);
  $("#hidetext").fadeIn(750);
   $("body").animate({backgroundColor: "rgb( 20, 20, 20 )" }, 1000);
   $("body").animate({backgroundColor: "rgb( 255, 255, 255 )" }, 2000);
   $("#hideimage", "#hidetext").toggle("puff");
});
