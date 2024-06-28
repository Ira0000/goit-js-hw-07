const categoriesList = document.querySelectorAll('.item');

const numberOfCategories = categoriesList.length;
console.log(`Number of categories: ${numberOfCategories}`);

categoriesList.forEach(element => {
  const categoryTitle = element.firstElementChild.textContent;
  const categoryItemsList = element.lastElementChild.children.length;
  console.log();
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsList}`);
});
