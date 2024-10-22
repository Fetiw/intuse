import GLightbox from 'glightbox';

const sliderBoxItems = document.querySelectorAll('[data-swiper="content"]');

const customLightboxHTML = `
<div id="glightbox-body" class="glightbox-container">
    <div class="gloader visible"></div>
    <div class="goverlay"></div>
    <div class="gcontainer">
      <div id="glightbox-slider" class="gslider"></div>
      
      <div class="glightbox-container__navigation">
        <button class="gprev" tabindex="1" aria-label="Previous">
          <svg>
            <use xlink:href="/images/sprite.svg#icon-arrow-left"></use>
          </svg>
        </button>
        <button class="gnext" tabindex="0" aria-label="Next" data-customattribute="example">
          <svg>
            <use xlink:href="/images/sprite.svg#icon-arrow-right"></use>
          </svg>
        </button>
      </div>
      
      <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>
  </div>
</div>
`;

if (sliderBoxItems.length) {
  sliderBoxItems.forEach((item) => {
    const lightbox = GLightbox({
      selector: '[data-swiper="content"] .glightbox',
      lightboxHTML: customLightboxHTML,
      touchNavigation: true,
      loop: false,
      autoplayVideos: false,
      closeOnOutsideClick: false,
      zoomable: false,
    })
  })
}
