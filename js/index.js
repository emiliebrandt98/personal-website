// Kontakt-Formular
const contactForm = document.querySelector('[data.js="contact-form"]');

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const contactFormData = new FormData(event.target);
  const data = Object.fromEntries(contactFormData);

  contactFormData.reset();
  contactFormData.elements.inputName.focus();
});

const inputMessage = document.querySelector('[data-js="contact-message"]');
const remainingCharacters = document.querySelector(
  '[data-js="remaining-characters"]',
);

const maxLength = inputMessage.maxLength;

inputMessage.addEventListener("input", (event) => {
  remainingCharacters.textContent = maxLength - event.target.value.length;
});
