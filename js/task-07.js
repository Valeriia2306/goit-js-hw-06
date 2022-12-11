const textSizeControl = document.querySelector("#font-size-control");
const element = document.querySelector("#text");

textSizeControl.addEventListener("input", event => {
	const textSize = `${event.currentTarget.value}px`;
	element.style.fontSize = textSize;
});
