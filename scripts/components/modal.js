import { lockScrollPage } from '../helpers/lockPage.js';

const buttonModals = document.querySelectorAll('[data-modal-open]');

if (buttonModals.length) {
  buttonModals.forEach(button => {
    button.onclick = ({ currentTarget }) => {
      const modalName = currentTarget.getAttribute('data-modal-open');
      const dialog = document.querySelector(`[id="${modalName}"]`);

      openDialog(dialog);
    }
  })
}

function openDialog(dialog) {
  const closeBtns = dialog.querySelectorAll('[data-modal-close]');

  dialog.showModal();
  lockScrollPage(true);

  closeBtns.forEach(btn => btn.onclick = () => closeDialog(dialog));

  dialog.onclick = ({target: dialog}) => {
    if (dialog.nodeName === 'DIALOG') {
      closeDialog(dialog)
    }
  };
}

function closeDialog(dialog) {
  dialog.close('dismiss');
  lockScrollPage(false);
}
