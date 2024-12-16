function getRandomChinese(length) {
	return new Promise((resolve) => {
		let result = "";
		let i = 0;

		const generateChar = () => {
			const sign = Date.now().toString().slice(-5); // Отримуємо останні 5 цифр від поточного часу
			result += String.fromCharCode(sign); // Конвертуємо їх в символ
			i++;

			if (i < length) {
				setTimeout(generateChar, 50); // Викликаємо функцію знову через 50 мс
			} else {
				resolve(result); // Завершуємо проміс, коли досягли необхідної довжини
			}
		};

		generateChar();
	});
}

// Виклик функції
getRandomChinese(4).then(console.log); // Наприклад, виведе: "촛궻簽紙"
