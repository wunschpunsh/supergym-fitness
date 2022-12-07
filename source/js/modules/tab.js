const buttonTabs = document.querySelectorAll('.tabs__button-item');
const contentTabs = document.querySelectorAll('.tabs__content-list');

const DESCTOP_WIDTH = '(min-width:1200px)';

const breakpoint = window.matchMedia(DESCTOP_WIDTH);

const breakpointChecker = (item) => {
  if (breakpoint.matches) {
    item.style.display = 'grid';
  } else {
    item.style.display = 'block';
  }
};

const hideNotFirstContent = () => {
  contentTabs.forEach((item, index) => {
    if (index > 0) {
      item.style.display = 'none';
    }
  });
};

hideNotFirstContent();

const switchСontentTab = (indexButton) => {
  contentTabs.forEach((item, indexContent) => {
    if (indexButton === indexContent) {
      breakpointChecker(item);
    } else {
      item.style.display = 'none';
    }
  });
};

const createTab = () => {
  buttonTabs.forEach((button, indexButton) => {
    button.addEventListener('click', () => {
      buttonTabs.forEach((elem) => {
        elem.classList.remove('tabs__button-item--active');
      });

      switchСontentTab(indexButton);
      button.classList.add('tabs__button-item--active');
    });
  });
};

export {createTab};
