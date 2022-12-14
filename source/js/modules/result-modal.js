const getSuccessMessage = () => {
  const successMessage = document.querySelector('.modal');

  successMessage.classList.remove('visually-hidden');
  document.body.classList.add('scroll-lock');
  const successButton = successMessage.querySelector('.modal__button');

  const hiddenSuccessMessage = () => {
    successMessage.classList.add('visually-hidden');
    document.body.classList.remove('scroll-lock');
    document.body.style.padding = '0';
    document.body.style.top = '0';
  };

  let onSuccesMessageOutsideClick = null;

  const onSuccesMessageKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Enter') {
      evt.preventDefault();
      hiddenSuccessMessage();
      document.removeEventListener('keydown', onSuccesMessageKeyDown);
      document.removeEventListener('click', onSuccesMessageOutsideClick);
    }
  };

  onSuccesMessageOutsideClick = (evt) => {
    if (successMessage === evt.target) {
      hiddenSuccessMessage();
      document.removeEventListener('click', onSuccesMessageOutsideClick);
      document.removeEventListener('keydown', onSuccesMessageKeyDown);
    }
  };

  const onSuccessButtonClick = () => {
    hiddenSuccessMessage();
    successButton.removeEventListener('click', onSuccessButtonClick);
    document.removeEventListener('click', onSuccesMessageOutsideClick);
    document.removeEventListener('keydown', onSuccesMessageKeyDown);
  };

  successButton.addEventListener('click', onSuccessButtonClick);
  document.addEventListener('keydown', onSuccesMessageKeyDown);
  document.addEventListener('click', onSuccesMessageOutsideClick);
};

export {getSuccessMessage};
