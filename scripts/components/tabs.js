const tabItems = document.querySelectorAll('[data-tabs]');

if  (tabItems.length) {
  const changeTab = (item) => {
    const btns = item.querySelectorAll('[data-tab]');
    const contents = item.querySelectorAll('[data-tab-content]');

    let btnActive = [...btns].find(btn => btn.classList.contains('is-active'));
    let contentActive = [...contents].find(content => content.classList.contains('is-active'));

    const currentContent = (value) => {
      return [...contents].find(content => content.getAttribute('data-tab-content') === value)
    };
    
    btns.forEach((btn) => {
      btn.addEventListener('click', ({ currentTarget }) => {
        const value = currentTarget.getAttribute('data-tab');

        if (currentContent(value) !== contentActive) {
          contentActive.classList.remove('is-active');
          btnActive.classList.remove('is-active');
          contentActive = currentContent(value);
          btnActive = currentTarget;
          contentActive.classList.add('is-active');
          btnActive.classList.add('is-active');
        }
      })
    })
  }

  tabItems.forEach((item) => changeTab(item))
}
