const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listOfIngredients = document.querySelector("#ingredients");
const elements = ingredients.map(element => {
	const ingredient = document.createElement("li");
	ingredient.classList.add("item");
	ingredient.textContent = element;

	return ingredient;
});
console.log(elements);
listOfIngredients.append(...elements);

// const ingredient = document.createElement("li");
// ingredients.forEach(element => {
// 	ingredient.textContent = element;
// 	ingredient.classList.add("item");
// 	ingredients.push(ingredient);
// });
// console.log();

// const markup = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join("");
// console.log(markup);
// list.innerHTML = markup;
