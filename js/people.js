const peopleUrl = "http://api.open-notify.org/astros.json";

async function fetchPeople() {
	try {
		const response = await fetch(peopleUrl);
		const data = await response.json();
		console.log(data);
		displayPeople(data);
		displayProfile(data);
	} catch (error) {
		console.log(error);
	}
}

fetchPeople();

function displayPeople(data) {
	const peopleContainer = document.querySelector(".peoplecontainer");

	let html = "";

	peopleContainer.innerHTML += `<p>
       There are currently <span>${data.number}</span> people in space.
    </p>`;
}

function displayProfile(data) {
	const profileContainer = document.querySelector("#profilecards");
	const people = data.people;
	let html = "";
	console.log(people);
	for (let i = 0; i < people.length; i++) {
		profileContainer.innerHTML += `<div class="card">
        <h4 class="name">Astronaut: ${people[i].name}</h4>
        <p class="craft">Craft: ${people[i].craft}</p>
        </div>`;
	}
}
