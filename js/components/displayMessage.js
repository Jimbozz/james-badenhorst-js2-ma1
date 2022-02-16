export default function displayMessage(type, message, targetElement) {
  const element = document.querySelector(targetElement);

  element.innerHtml = `<div class="message ${type}">${message}</div>`;
}
