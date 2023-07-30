(function ($) {
  "use strict";
  $(document).ready(function () {
    /*------------------
          Hamburger Menu Toggle
          ------------------*/
    let mobileMenu = $(".dev-menu-toggle");
    let menuIs = $(".dev-menu");
    let menuOpen = $(".dev-menu-open");
    let menuClose = $(".dev-menu-close");
    menuOpen.on("click", function () {
      $(this).addClass("d-none");
      menuClose.addClass("active");
      menuIs.slideToggle();
    });
    menuClose.on("click", function () {
      menuIs.slideToggle();
      $(this).removeClass("active");
      menuOpen.removeClass("d-none");
    });
  });

  /*------------------
        Testimonial Slider
        ------------------*/
  let testimonialSlider = $(".testimonials-slider");
  if (testimonialSlider.length) {
    testimonialSlider.slick({
      mobileFirst: true,
      arrows: true,

      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            arrows: true,
            prevArrow:
              '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
            nextArrow:
              '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
          },
        },
      ],
    });
  }
})(jQuery);
