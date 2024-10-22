window.addEventListener('load', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
})
