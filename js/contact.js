const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
	event.preventDefault();

	const firstName = document.querySelector("#firstName");
	const firstNameError = document.querySelector("#firstNameError");
	const firstNameValue = firstName.value;

	const lastName = document.querySelector("#lastName");
	const lastNameError = document.querySelector("#lastNameError");
	const lastNameValue = lastName.value;

	const email = document.querySelector("#email");
	const emailError = document.querySelector("#emailError");
	const emailValue = email.valid;

	const message = document.querySelector("#message");
	const messageError = document.querySelector("#messageError");
	const messageValue = message.value;

	if (checkInputLength(firstNameValue) === true) {
		firstNameError.style.display = "none";
	} else {
		firstNameError.style.display = "block";
	}

	if (checkInputLength(lastNameValue) === true) {
		lastNameError.style.display = "none";
	} else {
		lastNameError.style.display = "block";
	}

	if (checkInputLengthMessage(messageValue) === true) {
		messageError.style.display = "none";
	} else {
		messageError.style.display = "block";
	}

	if (validateEmail(emailValue) === true) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}
}

function checkInputLength(value) {
	const trimmedValue = value.trim();

	if (trimmedValue.length > 1) {
		return true;
	} else {
		return false;
	}
}

function checkInputLengthMessage(value) {
	const trimmedValue = value.trim();

	if (trimmedValue.length > 19) {
		return true;
	} else {
		return false;
	}
}

function validateEmail(valid) {
	const regEx = /\S+@\S+\.\S+/;
	const patternMatches = regEx.test(valid);
	return patternMatches;
}
