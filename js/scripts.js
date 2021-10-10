function displayDropdown(buttonClick) {
	document.getElementById("dropdownContent").classList.toggle("open");

	console.log("HELLO");
}

const button = document.getElementById("menuBtn");
button.addEventListener("click", displayDropdown);
