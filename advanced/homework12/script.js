let planetsUrl = "https://swapi.dev/api/planets/";
let nextPlanetsUrl = null;
let isWookiee = false;

function getCharacterField(data, standardField, wookieeField) {
	return isWookiee ? data[wookieeField] : data[standardField];
}

async function getCharacters() {
	const filmNumber = document.getElementById("filmNumber").value || 5;
	const format = isWookiee ? "?format=wookiee" : "";
	const response = await fetch(
		`https://swapi.dev/api/films/${filmNumber}/${format}`
	);
	const data = await response.json();
	const characterUrls = data.characters;
	const charactersDiv = document.getElementById("characters");
	charactersDiv.innerHTML = "";

	for (const url of characterUrls) {
		const characterResponse = await fetch(url + format);
		const characterData = await characterResponse.json();
		const characterElement = document.createElement("div");
		characterElement.className = "character";

		const name = getCharacterField(characterData, "name", "whrascwo");
		const birthYear = getCharacterField(
			characterData,
			"birth_year",
			"rhahrcaoac_roworarc"
		);
		const gender = getCharacterField(
			characterData,
			"gender",
			"acraahrc_oaooanoorc"
		);

		characterElement.innerHTML = `
						<img src="https://starwars-visualguide.com/assets/img/characters/${
							characterData.url.match(/\/(\d+)\/$/)[1]
						}.jpg" alt="${name}">
						<h3>${name}</h3>
						<p>${isWookiee ? "Rhahrcaoac Roworarc" : "Дата народження"}: ${
			birthYear !== undefined ? birthYear : "N/A"
		}</p>
						<p>${isWookiee ? "Acraahrc Oaooanoorc" : "Стать"}: ${
			gender !== undefined ? gender : "N/A"
		}</p>
				`;
		charactersDiv.appendChild(characterElement);
	}
}

async function getPlanets() {
	const format = isWookiee ? "?format=wookiee" : "";
	const response = await fetch(planetsUrl + format);
	const data = await response.json();
	nextPlanetsUrl = data.next;
	displayPlanets(data.results);
}

function displayPlanets(planets) {
	const planetsDiv = document.getElementById("planets");
	planetsDiv.innerHTML = "";

	for (const planet of planets) {
		const name = getCharacterField(planet, "name", "whrascwo");
		const climate = getCharacterField(planet, "climate", "oaanahscraaowo");
		const terrain = getCharacterField(planet, "terrain", "whrascwooaaooworc");
		const population = getCharacterField(planet, "population", "akooao");

		const planetElement = document.createElement("div");
		planetElement.className = "planet";
		planetElement.innerHTML = `
						<h3>${name}</h3>
						<p>${isWookiee ? "Oaanahscraaowo" : "Climate"}: ${climate}</p>
						<p>${isWookiee ? "Whrascwooaaooworc" : "Terrain"}: ${terrain}</p>
						<p>${isWookiee ? "Akooao" : "Population"}: ${population}</p>
				`;
		planetsDiv.appendChild(planetElement);
	}
}

function loadNextPlanets() {
	if (nextPlanetsUrl) {
		planetsUrl = nextPlanetsUrl;
		getPlanets();
	}
}

function translateToWookiee() {
	isWookiee = !isWookiee;

	document.getElementById("infoButton").textContent = isWookiee
		? "Rwoanhworc rworarc"
		: "Отримати інформацію";
	document.getElementById("wookieeButton").textContent = isWookiee
		? "Arwoah"
		: "Перекласти на Вукийську";
	document.getElementById("planetsButton").textContent = isWookiee
		? "Rwoanhwoorc aoao"
		: "Показати планети";
	document.getElementById("nextPlanetsButton").textContent = isWookiee
		? "Arwoah oarcwo"
		: "Наступні планети";

	getCharacters(); // Перезавантажуємо список персонажів з новим форматом
	getPlanets(); // Перезавантажуємо список планет з новим форматом
}
