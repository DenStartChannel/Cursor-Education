class Student {
	constructor(university, course, fullName) {
		this.university = university;
		this.course = course;
		this.fullName = fullName;
		this._marks = [5, 4, 4, 5];
		this.isDismissed = false;
	}

	getInfo() {
		return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
	}

	getAverageMark() {
		if (this.isDismissed) {
			return null;
		}
		const sum = this._marks.reduce((acc, mark) => acc + mark, 0);
		const average = sum / this._marks.length;
		return average.toFixed(1); // Округлюємо до одного десяткового знаку
	}

	set marks(value) {
		if (!this.isDismissed) {
			this._marks.push(value);
		}
	}

	get marks() {
		if (this.isDismissed) {
			return null;
		}
		return this._marks;
	}

	dismiss() {
		this.isDismissed = true;
		this._marks = null;
	}

	recover() {
		this.isDismissed = false;
		this._marks = [5, 4, 4, 5];
	}
}

// Приклад використання класу Student
const student = new Student(
	"Вища Школа Психотерапії м.Одеса",
	1,
	"Остап Родоманський Бендер"
);
console.log(student.getInfo()); // "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер"
console.log(student.marks); // [5, 4, 4, 5]
student.marks = 5;
console.log(student.marks); // [5, 4, 4, 5, 5]
console.log(student.getAverageMark()); // "4.6"
student.dismiss();
console.log(student.marks); // null
student.recover();
console.log(student.marks); // [5, 4, 4, 5]
