const forms = document.querySelectorAll('.form');

const onLocalStorageChange = (evt) => {
  localStorage.setItem(evt.target.name, evt.target.value);
};

const createLocalStorage = () => {
  forms.forEach((form) => {
    for (let i = 0; i < form.length; i++) {
      const element = form[i];
      if (element.type !== 'submit') {
        element.addEventListener('change', onLocalStorageChange);
      }
    }
  });
};

const showStorage = () => {
  forms.forEach((form) => {
    for (let i = 0; i < form.length; i++) {
      const element = form[i];
      if (element.type !== 'submit') {
        element.value = localStorage.getItem(element.name);
      }
    }
  });
  createLocalStorage();
};

const clearLocalStorage = () => {
  forms.forEach((form) => {
    for (let i = 0; i < form.length; i++) {
      const element = form[i];
      element.value = '';
    }
  });
  localStorage.clear();
};

export {clearLocalStorage, showStorage, forms};
