const n = 8321;
const y = 4;
const name1 = "влад";
function maxDigit(n) {
	if (n == 0) {
		return 0;
	} else {
		return Math.max(n % 10, maxDigit(Math.floor(n / 10)));
	}
}
function pow(x, y) {
	let result = x;

	for (let i = 1; i < y; i++) {
		result *= x;
	}

	return result;
}
function formatName(name) {
	if (typeof name !== "string") {
		throw new Error("Ім'я має бути рядком");
	}

	if (name.length === 0) {
		return name;
	}

	const formattedName =
		name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
	return formattedName;
}

function result_after_tax(salary) {
	const tax = 0.195;
	const sum_after_tax = Math.ceil(salary * (1 - tax));
	return sum_after_tax;
}

const salary = 1000;
const sum_after_tax = result_after_tax(salary);

function getRandomNumber(N, M) {
	return Math.floor(Math.random() * (M - N + 1)) + N;
}
function countLetter(letter, word) {
	// Перетворюємо слово та букву на однаковий регістр для порівняння
	const lowerCaseLetter = letter.toLowerCase();
	const lowerCaseWord = word.toLowerCase();

	let count = 0;
	for (let i = 0; i < lowerCaseWord.length; i++) {
		if (lowerCaseWord[i] === lowerCaseLetter) {
			count++;
		}
	}

	return count;
}

document.writeln(
	`функція №1, найбільшa цифрa в цьому числі: ${maxDigit(n)}<br/> 
 функція №2, Степінь від числа: ${pow(3, y)}<br/>
 функція №3, Відформатованне ім'я "влад" : ${formatName(name1)}<br/>
 функція №4, обрахунок податку:${result_after_tax(salary)}<br/>
 функція №5, рандомне число від 1 до 10: ${getRandomNumber(1, 10)}<br/>
 функція №6, скільки раз повторилася буква в слові Ананас: ${countLetter(
		"а",
		"Ананас"
 )}
	`
);
