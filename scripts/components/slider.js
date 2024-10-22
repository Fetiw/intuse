import Swiper from 'swiper';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const sliderBlocks = document.querySelectorAll('[data-swiper]');

if (sliderBlocks.length) {
  sliderBlocks.forEach(block => {
    const slider = block.querySelector('.swiper-block__slider');
    const btnNext = block.querySelector('.swiper-button-next');
    const btnPrev = block.querySelector('.swiper-button-prev');

    const swiper = new Swiper(slider, {
      modules: [Navigation, Pagination, EffectFade],
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 600,
      loop: true,
      effect: 'slide',
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
      breakpoints: {
        '768': {
          slidesPerView: 2,
          spaceBetween: 14
        },
        '992': {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
      on: {
        init: () => {
          block.classList.add('is-init');
        },
      }
    });
  })
}
