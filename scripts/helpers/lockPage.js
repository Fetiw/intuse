export function lockScrollPage(status) {
  if (status) {
    lockPage();
  } else {
    unlockPage();
  }
}

const lockPage = () => {
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
  body.style.width = '100%';
};

const unlockPage = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  body.style.width = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}
