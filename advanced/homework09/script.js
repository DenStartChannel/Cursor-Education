function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function generateBlocks() {
	const container = document.getElementById("container");
	for (let i = 0; i < 25; i++) {
		const square = document.createElement("div");
		square.classList.add("square");
		square.style.backgroundColor = getRandomColor();
		container.appendChild(square);
	}
}

generateBlocks();

function changeColors() {
	const squares = document.querySelectorAll(".square");
	squares.forEach((square) => {
		square.style.backgroundColor = getRandomColor();
	});
}

function generateBlocksInterval() {
	generateBlocks();
	setInterval(changeColors, 1000); // Змінювати кольори кожну секунду
}

generateBlocksInterval();
