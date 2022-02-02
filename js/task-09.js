function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRandomColorEl = document.querySelector('.change-color');
const colorValueEl = document.querySelector('.color');

btnRandomColorEl.addEventListener('click', changeBodyBgColor);

function changeBodyBgColor(event) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  changeSpanText(newColor);
}

function changeSpanText(color) {
  colorValueEl.textContent = color;
}