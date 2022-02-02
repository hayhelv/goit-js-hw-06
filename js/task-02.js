const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsConteinerEl = document.querySelector('#ingredients');

const ingredientsEl = options => {
  return options.map(option => {
    const itemEL = document.createElement('li');
    itemEL.textContent = option;
    itemEL.classList.add('item');

    return itemEL;
  });
}
const elements = ingredientsEl(ingredients);
ingredientsConteinerEl.append(...elements);
  
