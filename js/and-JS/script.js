
const product_button = document.querySelectorAll('.products-hover__button')
const card = document.querySelector('.may-info__carsina')
const header = document.querySelector('.header')
const body = document.querySelector('.products__body')
const product_animate = document.querySelectorAll('.product_animate')
const carsina_value = document.querySelector('.may-info__carsina-value span')
const fly = document.querySelector('.main__funiture')
const fly_body = document.querySelector('.funiture__body')
const funiture = document.querySelectorAll('.funiture img')
const slider_f = document.querySelector('.slider-f')
const slider_f_sw = slider_f.querySelector('.slider-f .swiper-wrapper')
const slider_f_crest = slider_f.querySelector('.slider-f__crest')
let a = 0
if (product_button) {
   product_button.forEach(element => {
      element.addEventListener('click', function (event) {
         a = a + 1
         let right = element.getBoundingClientRect().right - card.getBoundingClientRect().right
         let top = element.getBoundingClientRect().top - card.getBoundingClientRect().top
         let item = element.closest('.products__item')
         let brother = item.outerHTML

         item.insertAdjacentHTML(
            "afterbegin",
            `
            <div class="product_animate">
               ${brother}
            </div>
            `
         )
         let hover_product = item.querySelectorAll('.product_animate .products-hover')
         for (i of hover_product) {
            i.classList.add('dnone')
         }

         setTimeout(function () {
            item.querySelector('.product_animate').style.cssText = `
               transform: translate(${-right + 120}px, ${-top - 40}px) scale(0);
               filter: blur(4px);
            `
         }, 100)
         carsina_value.innerHTML = a
      })
   });
}

window.addEventListener('scroll', function () {
   if (scrollY > 10) {
      header.classList.add('_active')
   }
   if (scrollY < 10) {
      header.classList.remove('_active')
   }
})

window.onload = function () {
   const paralax = document.querySelector('.funiture')
   if (paralax) {
      const clouds = document.querySelector('.funiture__body')

      const forClouds = 5
      const speed = 0.03

      let positionX = 0, positionY = 0;
      let coordXproces = 0, coordsYproces = 0;

      function setMouseParalaxStyle() {
         const distX = coordXproces - positionX
         positionX = positionX + (distX * speed)

         clouds.style.cssText = `transform: translateX(${-positionX / forClouds}%);`;

         requestAnimationFrame(setMouseParalaxStyle)
      }
      setMouseParalaxStyle();

      paralax.addEventListener('mousemove', function (event) {
         const paralaxWidth = window.innerWidth
         const coordX = event.pageX - paralaxWidth / 2
         coordXproces = coordX / paralaxWidth * 100;
      })
   }
}

for (f of funiture) {
   f.addEventListener('click', function () {
      slider_f.classList.add('_active')
      document.body.classList.add('_hidden')
   });
   slider_f_sw.insertAdjacentHTML(
      "afterbegin",
      `
      <div class='slider-f__slide swiper-slide'>
         ${f.outerHTML}
      </div>
      `
   )
}
slider_f_crest.addEventListener('click', function () {
   slider_f.classList.remove('_active')
   document.body.classList.remove('_hidden')
})