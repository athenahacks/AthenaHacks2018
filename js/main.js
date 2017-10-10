
$(document).ready(function() {
  $('.fadeMe').hide().each(function(i) {
    $(this).delay(i*650).fadeIn(750);
  });

  $('.content').hide().each(function(i) {
   $(this).delay(4*650).fadeIn(100);
 });

  $('.faq li .question').click(function () {
    $(this).find('.plus-minus-toggle').toggleClass('collapsed');
    $(this).parent().toggleClass('active');
  });

  $(window).resize(function(){
    if(window.innerWidth < 1000) {
      $("#faq-container").removeClass("seven");
      $("#faq-image-container").removeClass("four");
      $(".faq-img").addClass("bottom");
      $(".faq-img").removeClass("side");

    }

    if(window.innerWidth >= 1000) {
      $("#faq-container").addClass("seven");
      $("#faq-image-container").addClass("four");
      $(".faq-img").addClass("side");
      $(".faq-img").removeClass("bottom");
    }
  });
});
