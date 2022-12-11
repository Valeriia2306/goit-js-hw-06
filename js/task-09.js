function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorElement = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", () => {
	const bodyStyle = document.body.style;
	bodyStyle.backgroundColor = getRandomHexColor();
	colorElement.textContent = bodyStyle.backgroundColor;
});
