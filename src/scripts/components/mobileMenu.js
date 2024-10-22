import { lockScrollPage } from '../helpers/lockPage.js';

const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu-mobile');

if (btnMenu && menu) {
  btnMenu.addEventListener('click', () => {

    if (menu.classList.contains('is-opened')) {
      menu.classList.remove('is-opened');
      btnMenu.classList.remove('is-active');

      lockScrollPage(false);
      return
    }

    lockScrollPage(true);
    menu.classList.add('is-opened');
    btnMenu.classList.add('is-active');
  })
}
