const croissant = 15.678;
const meat = 123.965;
const potato = 90.2345;

const sum = 0;

sum = croissant + meat + potato;

const x = Math.round(sum / 100) * 100;

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

const discont = Math.round((sum / getRandomInt(100)) * 100) / 100;
const real_price = Math.round((sum / 2) * 100) / 100;
const income = real_price - discont;
const average = Math.round((sum / 3) * 100) / 100;

const text = `Ціна круасанна: ${croissant} \nЦіна м'яса: ${meat}\nЦіна картоплі: ${potato}\nМаксимальне число: ${Math.max(
	croissant,
	meat,
	potato
)}\nМінімальне число: ${Math.min(
	croissant,
	meat,
	potato
)}\nСума всіх чисел: ${sum}\nЗавкруглена сума всіх чисел: ${x}\n ${
	x < 300
		? "true, число завкруглилося в меншу сторону"
		: "false, число завкругилося в більшу сторону"
}\n ${x % 2 != 0 ? "число є не парним" : "число є парним"}\n ${
	500 - sum
} сума решти, при оплаті всіх товарів\nСереднє значення цін: ${average}\n Чистий дохід: ${income}
`;
console.log(text);
