let n;
let m;
let sum = 0;

if (!Number.isInteger(n) || !Number.isInteger(m)) {
	do {
		n = Number(window.prompt("Введіть правильно число N"));
		console.log(n);
	} while (!Number.isInteger(n));
	do {
		m = Number(window.prompt("Введіть правильно число M"));
		console.log(m);
	} while (!Number.isInteger(m));
}
const decide = confirm("пропускаєм парні?");
for (let i = n; i <= m; i++) {
	if (decide && i % 2 == 0) {
		continue;
	}
	sum += i;
}
console.log(sum);

document.writeln(
	`Перше число: ${n}<br/> 
	Друге число: ${m}<br/>
	Пропускали парні: ${decide} <br/>
	Сума чисел: ${sum}
	`
);
