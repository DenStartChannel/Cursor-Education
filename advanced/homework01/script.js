const croissant = 15.678;
const meat = 123.965;
const potato = 90.2345;

let sum = 0;

sum = croissant + meat + potato;

const x = Math.round(sum / 100) * 100;

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
let discont = (getRandomInt(100) / x) * 100;
const real_price = Math.round((sum / 2) * 100) / 100;
const income = real_price - discont;
const average = Math.round((sum / 3) * 100) / 100;
const change = 500 - sum;

const text = `Ціна круасанна: ${croissant} <br> \nЦіна м'яса: ${meat} <br>\nЦіна картоплі: ${potato} <br>\nМаксимальне число: ${Math.max(
	croissant,
	meat,
	potato
)}\n <br> Мінімальне число: ${Math.min(
	croissant,
	meat,
	potato
)}\n <br> Сума всіх чисел: ${sum}\n <br>Завкруглена сума всіх чисел: ${x}\n <br> ${
	x < 300
		? "true, число завкруглилося в меншу сторону"
		: "false, число завкругилося в більшу сторону"
}\n <br> ${
	x % 2 != 0 ? "число є не парним" : "число є парним"
}\n <br> ${change} сума решти, при оплаті всіх товарів\n <br>Середнє значення цін: ${average}\n <br> Чистий дохід: ${income}
 Знижка вирохована:${discont} 
`;
console.log(text);
document.writeln(text);
