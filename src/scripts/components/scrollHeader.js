const header = document.querySelector('.header');
const hasFixed = document.querySelector('.fixed-header');
const block = document.querySelector('.main [class*="banner-"]');

if (header && hasFixed) {
  const intersectionCallback = (entries) => {
    entries.forEach((entry) => {
      if  (entry.isIntersecting) {
        header.classList.remove('is-scrolled');
      } else {
        header.classList.add('is-scrolled');
      }
    });
  };

  const observer = new IntersectionObserver(intersectionCallback, {
    threshold: 0.1,
  });

  observer.observe(block);
}
