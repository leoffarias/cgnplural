$(document).ready(function(){

//Plax
$('#logo-grande').plaxify({"xRange":160,"yRange":30,"invert":true})
$.plax.enable();

//Descer
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1200);
        return false;
      }
    }
  });
});

$( "#logo-grande" ).click(function() {
  $("#balao1").fadeIn(500).animate({top:100},3000).fadeOut(500);
});


});
