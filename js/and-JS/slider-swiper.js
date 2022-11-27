const swiper = new Swiper('.main-slider__slider', {
   loop: true,
   parallax: true,
   autoHeight: true,
   centeredSlides: true,
   touchRatio: 2,
   grabCursor: true,
   touchAngle: 70,
   // watchOverfolew: true,
   // slidesPerGroup: 1.3,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   speed: 1200,
   pagination: {
      el: '.main-slider__dots',
      clickable: true,
   },
   navigation: {
      prevEl: '.main-slider__next',
      nextEl: '.main-slider__prev',
   },
   breakpoints: {
      320: {
         spaceBetween: 30,
         slidesPerView: 1,
      },
      920: {
         slidesPerView: 1.5,
         spaceBetween: 70
      }
   },
   on: {
      //   init: function (swiper){
      //     const AllSlider = document.querySelector('.fraction-controll__all')
      //     AllSlider.innerHTML = swiper.slides.length - 2 < 10 ? `0${swiper.slides.length - 2}` : swiper.slides.length - 2;
      //   },
      //   slideChange: function (swiper){
      //     const CurentSlider = document.querySelector('.fraction-controll__current')
      //     CurentSlider.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex  + 1;
      //   },
   },
});

const swiper2 = new Swiper('.but-room-slider__slider', {
   loop: true,
   parallax: true,
   // autoHeight: true,
   // centeredSlides: true,
   touchRatio: 2,
   // grabCursor: true,
   touchAngle: 20,
   spaceBetween: 20,
   // watchOverfolew: true,
   // onlyExternal: true,
   allowTouchMove: false,
   // slidesPerGroup: 1.3,
   speed: 1200,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: {
      el: '.but-room-slider__dots',
      clickable: true,
   },
   navigation: {
      nextEl: '.but-room-slider__prev',
      prevEl: '.but-room-slider__next',
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
         spaceBetween: 0,
      },
      415: {
         slidesPerView: 1.5,
      },
      639: {
         slidesPerView: 2.2,
         spaceBetween: 10,
      }
   },
   on: {
      //   init: function (swiper){
      //     const AllSlider = document.querySelector('.fraction-controll__all')
      //     AllSlider.innerHTML = swiper.slides.length - 2 < 10 ? `0${swiper.slides.length - 2}` : swiper.slides.length - 2;
      //   },
      slideChange: function (swiper2) {
         const CurentSlider = document.querySelector('.but-room__value span')
         CurentSlider.innerHTML = swiper2.realIndex + 1 < 10 ? `0${swiper2.realIndex + 1}` : swiper2.realIndex + 1;
      },
   },
});

const swiper3 = new Swiper('.tips-product__slider', {
   loop: true,
   parallax: true,
   centeredSlides: true,
   touchRatio: 2,
   grabCursor: true,
   touchAngle: 20,
   slidesPerView: 3,
   spaceBetween: 20,
   // watchOverfolew: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   speed: 1200,
   pagination: {
      el: '.tips-product__dots',
      clickable: true,
   },
   navigation: {
      prevEl: '.tips-product_next',
      nextEl: '.tips-product_prev',
   },
   breakpoints: {
      320: {
         slidesPerView: 1
      },
      500: {
         slidesPerView: 1.5,
      },
      700: {
         slidesPerView: 3,
      }
   },
   // lazy: {
   //    loadOnTransitionStart: false,
   //    loadPrevNext: false,
   // }
})


const swiper4 = new Swiper('.slider-f__slider', {
   loop: true,
   parallax: true,
   centeredSlides: true,
   touchRatio: 3,
   grabCursor: true,
   touchAngle: 20,
   slidesPerView: 1,
   spaceBetween: 20,
   // watchOverfolew: true,
   // autoplay: {
   //    delay: 3000,
   //    disableOnInteraction: false,
   // },
   speed: 600,
   // pagination: {
   //    // el: '.tips-product__dots',
   //    clickable: true,
   // },
   navigation: {
      prevEl: '.slider-f__prev',
      nextEl: '.slider-f__next',
   },
   // lazy: {
   //    loadOnTransitionStart: false,
   //    loadPrevNext: false,
   // }
})