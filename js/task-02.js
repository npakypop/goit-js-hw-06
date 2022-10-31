const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRef = document.querySelector('#ingredients');
console.log("ingredientsRef", ingredientsRef);

const ingredientsList = ingredients.forEach(el => {
  const itemRef = document.createElement('li');
  itemRef.textContent = el;
  itemRef.classList.add('item');
  ingredientsRef.append(itemRef);
});


