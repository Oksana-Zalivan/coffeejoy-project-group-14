(() => {
  const refs = {
    modal: document.querySelector('[data-modal]'),
    form: document.querySelector('.form-email'),
    closeBtns: document.querySelectorAll('[data-modal-close]'),
    validText: document.querySelector('.text-valid'),
    invalidText: document.querySelector('.text-invalid'),
    emailInput: document.querySelector('#user-email'),
  };

  if (!refs.modal || !refs.form) return;

  refs.form.addEventListener('submit', event => {
    event.preventDefault();

    if (!refs.form.checkValidity()) {
      refs.form.reportValidity();
      showInvalidMessage();
      return;
    }

    showValidMessage();
    openModal();
    clearForm();
  });

  refs.closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  refs.modal.addEventListener('click', event => {
    if (event.target === refs.modal) closeModal();
  });

  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && refs.modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  function openModal() {
    refs.modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    refs.modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function clearForm() {
    refs.form.reset();
    hideMessages();
  }

  function showValidMessage() {
    refs.validText.style.display = 'block';
    refs.invalidText.style.display = 'none';
  }

  function showInvalidMessage() {
    refs.invalidText.style.display = 'block';
    refs.validText.style.display = 'none';
  }

  function hideMessages() {
    refs.validText.style.display = 'none';
    refs.invalidText.style.display = 'none';
  }
})();



