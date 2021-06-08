(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();



const submitBtn = document.querySelector('.submit-modal');
const checkbox = document.querySelector('.checkbox');

// submitBtn.addEventListener('click', onFormSubmit);
checkbox.addEventListener('change', makeSubmitBtnEnabled);


// function onFormSubmit(event) {
//   event.preventDefault();
//   alert('Спасибо за заказ. Ваша заявка в обработке.')
// }

function makeSubmitBtnEnabled(event) {
  submitBtn.disabled = !event.currentTarget.checked;
}