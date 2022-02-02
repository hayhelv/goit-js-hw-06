const allListCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${allListCategories.length}`);

allListCategories.forEach(category => {
  console.log(`Category: ${category.querySelector('h2').textContent}`);
  console.log(`Elements: ${category.querySelector('ul').children.length}`);
});
