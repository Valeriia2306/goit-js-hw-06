const categoryList = document.querySelector("#categories");
console.log("Number of categories:", categoryList.children.length);

const items = document.querySelectorAll(".item");
items.forEach(item => {
	console.log("Category:", item.firstElementChild.textContent);
	console.log("Elements:", item.lastElementChild.children.length);
});
