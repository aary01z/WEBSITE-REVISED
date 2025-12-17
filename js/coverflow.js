var chatSwiper = new Swiper('.chat-swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2, // ⭐ start from chat-3 (0-based index)

  slidesPerView: 'auto',
  loop: true,
  loopAdditionalSlides: 10,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  coverflowEffect: {
    rotate: 0,
    stretch: -40,
    depth: 250,
    modifier: 2,
    slideShadows: false,
  },

  pagination: {
    el: '.chat-swiper-pagination',
    clickable: true,
  },
});
