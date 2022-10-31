const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const ingredientsList = [];

ingredients.forEach(el => {
  const itemRef = document.createElement('li');
  itemRef.textContent = el;
  itemRef.classList.add('item');
  ingredientsList.push(itemRef);
});

ingredientsRef.append(...ingredientsList);
console.log("ingredientsRef", ingredientsRef);




