const open = document.getElementById("open");
const modalContainer = document.getElementById("modal_container");
const close = document.getElementById("close");

function showModal() {
  modalContainer.classList.add('show');
  setTimeout(() => {
    modalContainer.classList.remove('show');
  }, 4000);
  }

open.addEventListener('click', () => {
  showModal();
});

close.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});