import {validateForm} from './validate-form.js';
import {showStorage, clearLocalStorage, forms} from './local-storage.js';
import {getSuccessMessage} from './result-modal.js';
validateForm();
showStorage();

const sendFormData = (data) => {
  fetch('https://echo.htmlacademy.ru/', {
    method: 'POST',
    body: data,
  }).then((response) => {
    if (response.ok) {
      clearLocalStorage();
      getSuccessMessage();
    }
  });
};

const onFormSumbit = (evt) => {
  evt.preventDefault();
  const data = new FormData(evt.target);
  sendFormData(data);
};

const submitFeedBackForm = () => {
  forms.forEach((form) => {
    form.addEventListener('submit', onFormSumbit);
  });
};

export {submitFeedBackForm};
