const textItems = document.querySelectorAll('.item-text');
const btnItems = document.querySelectorAll('.btn--clip');

if (textItems.length > 0) {
  const intersectionCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-init');
      }
    });
  };

  const observer = new IntersectionObserver(intersectionCallback, {
    threshold: 0.9,
  });

  window.addEventListener('load', (event) => {
    textItems.forEach((item) => observer.observe(item))
  }, false);
}

if (btnItems.length > 0) {
  const intersectionCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show');
      }
    });
  };

  const observer = new IntersectionObserver(intersectionCallback, {
    threshold: 1,
  });

  window.addEventListener('load', (event) => {
    btnItems.forEach((item) => observer.observe(item))
  }, false);
}
