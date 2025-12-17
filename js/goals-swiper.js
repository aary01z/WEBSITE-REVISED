// goals-swiper.js
document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper === 'undefined') {
    console.error('Swiper not found - make sure swiper-bundle.min.js is loaded.');
    return;
  }

  // Initialize Swiper for testimonials/g oals
  var goalSwiper = new Swiper('.testimonial-swiper', {
    loop: true,
    centeredSlides: true,     // center the active slide
    grabCursor: true,
    speed: 700,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    slidesPerView: 3,         // desktop default
    spaceBetween: 24,
    watchSlidesProgress: true,
    pagination: {
      el: '.testimonial-swiper-pagination',
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 12
      },
      576: {
        slidesPerView: 1.25,
        spaceBetween: 16
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 2.4,
        spaceBetween: 22
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24
      }
    },
    on: {
      // ensure slides stay readable if some custom CSS toggles opacity
      slideChangeTransitionEnd: function () {
        // sometimes CSS from templates modifies classes; force opacity on active slide
        var slides = document.querySelectorAll('.testimonial-swiper .swiper-slide');
        slides.forEach(function (s) {
          s.style.opacity = '';
          s.style.transform = '';
        });
      }
    }
  });

  // Optional: pause autoplay on mouse enter, resume on leave
  var container = document.querySelector('.testimonial-swiper');
  if (container) {
    container.addEventListener('mouseenter', function () {
      goalSwiper.autoplay.stop();
    });
    container.addEventListener('mouseleave', function () {
      goalSwiper.autoplay.start();
    });
  }
});
