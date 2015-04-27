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

//Sistema de msg
var audio = $("#som")[0];
var msgs = 1;

$( "#logo-grande" ).click(function() {

  if(msgs == 1) {
    $("#balao1").fadeIn(500).animate({top:100},3000).fadeOut(500);
    $(".btn-in").animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#3268E5"}, 1000).animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#3268E5"}, 1000);
    $(".btn-in .plural-tit").animate({"color":"#3268E5"}, 1000).animate({"color":"#ffffff"}, 1000).animate({"color":"#3268E5"}, 1000).animate({"color":"#ffffff"}, 1000);
    audio.play();
    msgs++;

  } else if (msgs == 2) {
        $("#balao2").fadeIn(500).animate({top:100},3000).fadeOut(500);
    $(".btn-midia").animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#23967F"}, 1000).animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#23967F"}, 1000);
    $(".btn-midia .plural-tit").animate({"color":"#23967F"}, 1000).animate({"color":"#ffffff"}, 1000).animate({"color":"#23967F"}, 1000).animate({"color":"#ffffff"}, 1000);
    audio.play();
    msgs++;

  } else if (msgs == 3) {
    $("#balao3").fadeIn(500).animate({top:100},3000).fadeOut(500);
    $(".btn-on").animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#EEB211"}, 1000).animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#EEB211"}, 1000);
    $(".btn-on .plural-tit").animate({"color":"#EEB211"}, 1000).animate({"color":"#ffffff"}, 1000).animate({"color":"#EEB211"}, 1000).animate({"color":"#ffffff"}, 1000);
    audio.play();
    msgs++;
    
  } else if (msgs == 4) {
    $("#balao4").fadeIn(500).animate({top:100},3000).fadeOut(500);
    $(".btn-out").animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#009925"}, 1000).animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#009925"}, 1000);
    $(".btn-out .plural-tit").animate({"color":"#009925"}, 1000).animate({"color":"#ffffff"}, 1000).animate({"color":"#009925"}, 1000).animate({"color":"#ffffff"}, 1000);
    audio.play();
    msgs++;
    
  } else if (msgs == 5) {
    $("#balao5").fadeIn(500).animate({top:70},5000).fadeOut(500);
    $(".btn-in").animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#3268E5"}, 1000).animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#3268E5"}, 1000);
    $(".btn-in .plural-tit").animate({"color":"#3268E5"}, 1000).animate({"color":"#ffffff"}, 1000).animate({"color":"#3268E5"}, 1000).animate({"color":"#ffffff"}, 1000);
    $(".btn-on").animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#EEB211"}, 1000).animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#EEB211"}, 1000);
    $(".btn-on .plural-tit").animate({"color":"#EEB211"}, 1000).animate({"color":"#ffffff"}, 1000).animate({"color":"#EEB211"}, 1000).animate({"color":"#ffffff"}, 1000);
    $(".btn-midia").animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#23967F"}, 1000).animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#23967F"}, 1000);
    $(".btn-midia .plural-tit").animate({"color":"#23967F"}, 1000).animate({"color":"#ffffff"}, 1000).animate({"color":"#23967F"}, 1000).animate({"color":"#ffffff"}, 1000);
    $(".btn-out").animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#009925"}, 1000).animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#009925"}, 1000);
    $(".btn-out .plural-tit").animate({"color":"#009925"}, 1000).animate({"color":"#ffffff"}, 1000).animate({"color":"#009925"}, 1000).animate({"color":"#ffffff"}, 1000);


    audio.play();
    msgs = 1;
  }

});

$('.slider-parc').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  responsive: [
  {
    breakpoint: 622,
    settings: {
      slidesToShow: 1
    }
  }
  ]
});

});
