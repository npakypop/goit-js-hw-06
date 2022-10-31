const categoriesRef = document.querySelector('#categories');
// console.log("categoriesRef", categoriesRef);

const number = categoriesRef.children.length;
console.log("Number of categories: ", number);

const itemRef = [...categoriesRef.children];
// console.log("itemRef", itemRef);

const itemNumber = itemRef.map(el => { 
    const titleRef = el.firstElementChild;
    const elements = el.lastElementChild.children.length;
    console.log("Category: ", titleRef.textContent);
    console.log("Elements: ", elements);
});









