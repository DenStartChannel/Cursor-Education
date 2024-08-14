// 1. Функція для створення масиву випадкових цілих чисел
function getRandomArray(length, min, max) {
	const randomArray = [];
	for (let i = 0; i < length; i++) {
		const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
		randomArray.push(randomNumber);
	}
	return randomArray;
}

// 2. Функція для обчислення моди
function getModa(...numbers) {
	const countMap = new Map();
	let maxCount = 0;
	let moda = [];

	for (const number of numbers) {
		if (Number.isInteger(number)) {
			const count = countMap.has(number) ? countMap.get(number) + 1 : 1;
			countMap.set(number, count);

			if (count > maxCount) {
				maxCount = count;
				moda = [number];
			} else if (count === maxCount) {
				moda.push(number);
			}
		}
	}

	return moda;
}

// 3. Функція для обчислення середнього арифметичного
function getAverage(...numbers) {
	let sum = 0;
	let count = 0;

	for (const number of numbers) {
		if (Number.isInteger(number)) {
			sum += number;
			count++;
		}
	}

	if (count === 0) {
		return 0; // Щоб уникнути ділення на нуль
	}

	return sum / count;
}

// 4. Функція для обчислення медіани
function getMedian(...numbers) {
	const sortedNumbers = numbers.filter(Number.isInteger).sort((a, b) => a - b);
	const middle = Math.floor(sortedNumbers.length / 2);

	if (sortedNumbers.length % 2 === 0) {
		const left = sortedNumbers[middle - 1];
		const right = sortedNumbers[middle];
		return (left + right) / 2;
	} else {
		return sortedNumbers[middle];
	}
}

// 5. Функція для фільтрації парних чисел
function filterEvenNumbers(...numbers) {
	return numbers.filter(
		(number) => Number.isInteger(number) && number % 2 === 0
	);
}

// 6. Функція для підрахунку позитивних чисел
function countPositiveNumbers(...numbers) {
	return numbers.reduce((count, number) => {
		if (Number.isInteger(number) && number > 0) {
			count++;
		}
		return count;
	}, 0);
}

// Приклад використання
const randomArray = getRandomArray(10, 1, 100);
console.log("Випадковий масив:", randomArray);
console.log("Мода:", getModa(1, 2, 3, 2, 3, 4, 5, 5, 6));
console.log("Середнє арифметичне:", getAverage(1, 2, 3, 4, 5));
console.log("Медіана:", getMedian(1, 2, 3, 4, 5));
console.log("Парні числа:", filterEvenNumbers(1, 2, 3, 4, 5));
console.log(
	"Кількість позитивних чисел:",
	countPositiveNumbers(-1, 2, 0, 4, -5)
);
