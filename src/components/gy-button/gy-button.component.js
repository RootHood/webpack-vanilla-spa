class GyButton extends HTMLElement {
  constructor() {
    super();
    this.style.backgroundColor('black');
    this.style.color = "white";
    this.addEventListener('click', () => alert('Hello World'));
  }
}
customElements.define("gy-button", GyButton, {
  extends: 'button',
});