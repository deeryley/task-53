import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const product1 = document.querySelector('.product');
  const price1 = document.querySelector('.price');
  product1.setAttribute('data-price', price1);

});
