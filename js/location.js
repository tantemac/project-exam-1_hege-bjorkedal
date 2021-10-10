function initMap() {
	// The location of ISS

	const locationUrl = "http://api.open-notify.org/iss-now.json";

	async function fetchLocation() {
		try {
			const response = await fetch(locationUrl);
			const data = await response.json();
			console.log(data);
			createMap(data);
		} catch (error) {
			console.log(error);
		}
	}
	fetchLocation();

	function createMap(data) {
		const iss = {
			lat: Number(data.iss_position.latitude),
			lng: Number(data.iss_position.longitude),
		};
		// The map, centered at ISS
		const map = new google.maps.Map(document.getElementById("map"), {
			zoom: 3,
			center: iss,
		});
		// The marker, positioned at ISS and change the marker to ISS icon
		const image =
			"http://www.develophege.no/images/international_space_station_icon_small.png";
		const marker = new google.maps.Marker({
			position: iss,
			map: map,
			icon: image,
		});
	}
}
