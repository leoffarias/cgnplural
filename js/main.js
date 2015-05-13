$(document).ready(function(){

//Saiba mais
$(".saiba").click(function(){

  $(this).find($(".saiba-btn")).toggleClass('saiba-rot');
  $(this).parent().find($( ".hid" )).slideToggle("slow");
  var target = $(this).parent().parent().offset().top;
  $('html, body').animate({scrollTop: target}, 1000);
});

//mudar icone
$(".in-icon").hover(function() {
$( '.in-icon' ).attr("src","img/Icone-IN-cor.svg");
}, function() {
$( '.in-icon' ).attr("src","img/IconeIN.svg");
});

$(".on-icon").hover(function() {
$( '.on-icon' ).attr("src","img/Icone-ON-cor.svg");
}, function() {
$( '.on-icon' ).attr("src","img/IconeON.svg");
});


$(".midia-icon").hover(function() {
$( '.midia-icon' ).attr("src","img/Icone-MIDIA-cor.svg");
}, function() {
$( '.midia-icon' ).attr("src","img/IconeMIDIA.svg");
});


$(".out-icon").hover(function() {
$( '.out-icon' ).attr("src","img/Icone-OUT-cor.svg");
}, function() {
$( '.out-icon' ).attr("src","img/IconeOUT.svg");
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
    $("#balao1").fadeIn(500).animate({top:topv},3000).fadeOut(500).queue(function() { $( '.in-icon' ).attr("src","img/IconeIN.svg");  });
    $( '.in-icon' ).attr("src","img/Icone-IN-cor.svg");
    audio.play();
    msgs++;

  } else if (msgs == 2) {
        $("#balao2").fadeIn(500).animate({top:topv},3000).fadeOut(500).queue(function() { $( '.on-icon' ).attr("src","img/IconeON.svg");  });
    $( '.on-icon' ).attr("src","img/Icone-ON-cor.svg");
     audio.play();
    msgs++;

  } else if (msgs == 3) {
    $("#balao3").fadeIn(500).animate({top:topv},3000).fadeOut(500).queue(function() { $( '.midia-icon' ).attr("src","img/IconeMIDIA.svg");  });
    $( '.midia-icon' ).attr("src","img/Icone-MIDIA-cor.svg");
    audio.play();
    msgs++;
    
  } else if (msgs == 4) {
    $("#balao4").fadeIn(500).animate({top:topv},3000).fadeOut(500).queue(function() { $( '.out-icon' ).attr("src","img/IconeOUT.svg");  });
    $( '.out-icon' ).attr("src","img/Icone-OUT-cor.svg");
    audio.play();
    msgs++;
    
  } else if (msgs == 5) {
    $("#balao5").fadeIn(500).animate({top:topv2},5000).fadeOut(500).queue(function() { $( '.in-icon' ).attr("src","img/IconeIN.svg"); 
    $( '.on-icon' ).attr("src","img/IconeON.svg");
    $( '.midia-icon' ).attr("src","img/IconeMIDIA.svg");
    $( '.out-icon' ).attr("src","img/IconeOUT.svg"); });

    $( '.in-icon' ).attr("src","img/Icone-IN-cor.svg");
    $( '.on-icon' ).attr("src","img/Icone-ON-cor.svg");
    $( '.midia-icon' ).attr("src","img/Icone-MIDIA-cor.svg");
    $( '.out-icon' ).attr("src","img/Icone-OUT-cor.svg");
    

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
    breakpoint: 1000,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: 740,
    settings: {
      slidesToShow: 1
    }
  } 
  ]
});

});
