const value = document.querySelector("#validation-input");
console.log(value.getAttribute("data-length"));
const checkLength = value.dataset.length;
value.addEventListener("blur", onblur);

function onblur(event) {
	if (event.currentTarget.value.length === Number(checkLength)) {
		value.classList.remove("invalid");
		value.classList.add("valid");
	} else {
		value.classList.remove("valid");
		value.classList.add("invalid");
	}
	console.log(onblur);
}
