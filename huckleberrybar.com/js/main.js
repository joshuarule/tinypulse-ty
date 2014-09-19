/* Custom functions */

// hero--bg to full browser size

$(function() {

  function abso() {

    w = $(window).width();
    h = $(window).height()

    // editing height to make up for fixed nav size

    if ($(window).width()<768) {
      h = h - 48;
    } else {
      h = h - 118; // header height
    }

    $('.full').css({
      height: h
    });

    // console.log(w + " x " + h);
  }

  $(window).resize(function() {
    abso();         
  });

  abso();

});

// $(function() {
//   FastClick.attach(document.body);
// });




// $(window).bind('resize', function(){
//     var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');

//     if (size.indexOf("gridBreak") !=-1) {
//       // $("body").css("background", "blue");
//     } else if (size.indexOf("tablet") !=-1) {
//       $('.flexslider').flexslider('destroy');
//       console.log("tablet");
//     }

//   });