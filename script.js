const boxes = document.querySelectorAll('.box1');
const btns = document.querySelectorAll('button');
const span = document.getElementById('span');
const h2 = document.getElementById('h2');
const li = document.querySelector('.ul');
const ul = document.querySelector('.lol');

const cartBox = document.getElementById('cart-box');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let num = 0;
let total = 0;
let products = [];

ul.addEventListener('click', () => {
  li.classList.toggle('show');
});

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    num++;

    const box = boxes[index];
    const title = box.querySelector('h2').innerText;
    const priceText = box.querySelector('p:nth-of-type(2)').innerText;
    const price = parseFloat(priceText.replace('$', '').replace('/ day', ''));

    total += price;
    products.push({ title, price });

    updateCartIcon();
  });
});

h2.addEventListener('click', () => {
  if (cartBox.style.bottom === '0px') {
    cartBox.style.bottom = '-100%';
  } else {
    renderCart();
    cartBox.style.bottom = '0px';
  }
});

function updateCartIcon() {
  if (num === 0) {
    span.innerText = ``;
  } else {
    span.innerText = `(${num}) $${total.toFixed(2)}`;
  }
}

function renderCart() {
  cartItems.innerHTML = '';
  products.forEach(prod => {
    const li = document.createElement('li');
    li.textContent = `${prod.title} — $${prod.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });
  cartTotal.innerText = total.toFixed(2);
}