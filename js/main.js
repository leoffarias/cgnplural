$(document).ready(function(){

//Saiba mais
$(".saiba").click(function(){

  $(this).find($(".saiba-btn")).toggleClass('saiba-rot');
  $(this).parent().find($( ".hid" )).slideToggle("slow");
  var target = $(this).parent().parent().find($('.rolar')).offset().top;
  $('html, body').animate({scrollTop: target}, 1000);
});


/*//Plax
$('#logo-grande').plaxify({"xRange":160,"yRange":30,"invert":true})
$.plax.enable();*/

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
var topv = 100;
var topv2 = 70;
var acao = 1;

$( "#logo-grande" ).click(function() {

  if(msgs == 1) {
    $("#balao1").fadeIn(500).animate({top:topv},3000).fadeOut(500);
    $(".btn-in").animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#3268E5"}, 1000).animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#3268E5"}, 1000);
    $(".btn-in .plural-tit").animate({"color":"#3268E5"}, 1000).animate({"color":"#ffffff"}, 1000).animate({"color":"#3268E5"}, 1000).animate({"color":"#ffffff"}, 1000);
    audio.play();
    msgs++;

  } else if (msgs == 2) {
        $("#balao2").fadeIn(500).animate({top:topv},3000).fadeOut(500);
    $(".btn-midia").animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#23967F"}, 1000).animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#23967F"}, 1000);
    $(".btn-midia .plural-tit").animate({"color":"#23967F"}, 1000).animate({"color":"#ffffff"}, 1000).animate({"color":"#23967F"}, 1000).animate({"color":"#ffffff"}, 1000);
    audio.play();
    msgs++;

  } else if (msgs == 3) {
    $("#balao3").fadeIn(500).animate({top:topv},3000).fadeOut(500);
    $(".btn-on").animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#EEB211"}, 1000).animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#EEB211"}, 1000);
    $(".btn-on .plural-tit").animate({"color":"#EEB211"}, 1000).animate({"color":"#ffffff"}, 1000).animate({"color":"#EEB211"}, 1000).animate({"color":"#ffffff"}, 1000);
    audio.play();
    msgs++;
    
  } else if (msgs == 4) {
    $("#balao4").fadeIn(500).animate({top:topv},3000).fadeOut(500);
    $(".btn-out").animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#009925"}, 1000).animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#009925"}, 1000);
    $(".btn-out .plural-tit").animate({"color":"#009925"}, 1000).animate({"color":"#ffffff"}, 1000).animate({"color":"#009925"}, 1000).animate({"color":"#ffffff"}, 1000);
    audio.play();
    msgs++;
    
  } else if (msgs == 5) {
    $("#balao5").fadeIn(500).animate({top:topv2},5000).fadeOut(500);
    $(".btn-in").animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#3268E5"}, 1000).animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#3268E5"}, 1000);
    $(".btn-in .plural-tit").animate({"color":"#3268E5"}, 1000).animate({"color":"#ffffff"}, 1000).animate({"color":"#3268E5"}, 1000).animate({"color":"#ffffff"}, 1000);
    $(".btn-on").animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#EEB211"}, 1000).animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#EEB211"}, 1000);
    $(".btn-on .plural-tit").animate({"color":"#EEB211"}, 1000).animate({"color":"#ffffff"}, 1000).animate({"color":"#EEB211"}, 1000).animate({"color":"#ffffff"}, 1000);
    $(".btn-midia").animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#23967F"}, 1000).animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#23967F"}, 1000);
    $(".btn-midia .plural-tit").animate({"color":"#23967F"}, 1000).animate({"color":"#ffffff"}, 1000).animate({"color":"#23967F"}, 1000).animate({"color":"#ffffff"}, 1000);
    $(".btn-out").animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#009925"}, 1000).animate({"background-color":"#ffffff"}, 1000).animate({"background-color":"#009925"}, 1000);
    $(".btn-out .plural-tit").animate({"color":"#009925"}, 1000).animate({"color":"#ffffff"}, 1000).animate({"color":"#009925"}, 1000).animate({"color":"#ffffff"}, 1000);

    audio.play();
    if (acao == 1) {
    topv = 300;
    topv2 = 400;
    acao = 2;
  } else {
    topv = 100;
    topv2 = 70;
    acao = 1;
  }
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
    breakpoint: 1200,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: 650,
    settings: {
      slidesToShow: 1
    }
  } 
  ]
});

});
