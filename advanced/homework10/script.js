// Create a mapping of keys to sound files
const sounds = {
	a: "./assets/vine-boom.mp3",
	s: "./assets/discord-notification.mp3",
	d: "./assets/movie_1.mp3",
	f: "./assets/rizz-sounds.mp3",
	g: "./assets/gay-echo.mp3",
	h: "./assets/error.mp3",
};

// Add event listener for keydown event
document.addEventListener("keydown", function (event) {
	const key = event.key.toLowerCase(); // Get the key that was pressed

	// Remove the active class from all keys before adding it to the current one
	const activeKeys = document.querySelectorAll(".key.active");
	activeKeys.forEach((keyElement) => {
		keyElement.classList.remove("active");
	});

	if (sounds[key]) {
		const audio = new Audio(sounds[key]);
		audio.play();

		// Select the corresponding .key element and add the active class
		const keyElement = document.querySelector(`.key[data-key="${key}"]`);
		if (keyElement) {
			keyElement.classList.add("active");
		}
	}
});
