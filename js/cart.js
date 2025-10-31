let total = 0;
const totalEl = document.querySelector('.cart-total');

document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const price = parseInt(btn.getAttribute('data-price'));
    total += price;
    totalEl.textContent = total + ' ₽';
  });
});