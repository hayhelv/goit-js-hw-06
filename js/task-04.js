const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
const totalValue = document.querySelector('#value');

let counterValue = 0;

btnDecrementEl.addEventListener('click', decrement);
btnIncrementEl.addEventListener('click', increment);

function decrement() {
    counterValue -= 1;
    changeValue(counterValue);
}
function increment() {
    counterValue += 1;
    changeValue(counterValue);
}

function changeValue(value) {
    totalValue.textContent = value;
}

