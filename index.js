const modalTogglers = document.querySelectorAll(".modalToggler");
const modal = document.querySelector(".modal");

modalTogglers.forEach((modalToggler) => {
  modalToggler.addEventListener("click", () => {
   modal.classList.toggle('active')
  });
});
