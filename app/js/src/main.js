const promotion = new Swiper(".promotion-swiper", {
  loop: true,
  autoplay: {
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: "[data-control='promotion_next']",
    prevEl: "[data-control='promotion_prev']",
  },
  breakpoints : {
    320: {
      spaceBetween: 20,
    },
    720: {
      spaceBetween: 40,
    },
    1200: {
      spaceBetween: 60,
    }
  }
});
