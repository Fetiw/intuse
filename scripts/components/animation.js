const textItems = document.querySelectorAll('.item-text');

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
