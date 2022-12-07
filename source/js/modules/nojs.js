const deleteNoJs = () => {
  const nojs = document.querySelectorAll('.nojs');
  nojs.forEach((item) => {
    item.classList.remove('nojs');
  });
};

export {deleteNoJs};
