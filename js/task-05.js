// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".
const inputEl = document.querySelector("#name-input");
const textEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputFocus);

function onInputFocus(event) {
	textEl.textContent = event.currentTarget.value;
	if (inputEl.value === "") {
		return (textEl.textContent = "Anonymous");
	}
	console.log(event.currentTarget.value);
}
