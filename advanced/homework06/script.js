const students = [
	{
		name: "Tanya",
		course: 3,
		subjects: {
			math: [4, 4, 3, 4],
			algorithms: [3, 3, 3, 4, 4, 4],
			data_science: [5, 5, 3, 4],
		},
	},
	{
		name: "Victor",
		course: 4,
		subjects: {
			physics: [5, 5, 5, 3],
			economics: [2, 3, 3, 3, 3, 5],
			geometry: [5, 5, 2, 3, 5],
		},
	},
	{
		name: "Anton",
		course: 2,
		subjects: {
			statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
			english: [5, 3],
			cosmology: [5, 5, 5, 5],
		},
	},
];

function getSubjects(student) {
	const subjects = Object.keys(student.subjects);
	return subjects.map(
		(subject) =>
			subject.replace("_", " ").charAt(0).toUpperCase() +
			subject.replace("_", " ").slice(1)
	);
}

console.log(getSubjects(students[0]));

function getAverageMark(student) {
	const allMarks = [];
	for (const subject in student.subjects) {
		allMarks.push(...student.subjects[subject]);
	}
	const totalMarks = allMarks.reduce((acc, mark) => acc + mark, 0);
	const averageMark = totalMarks / allMarks.length;
	return averageMark.toFixed(2);
}

console.log(getAverageMark(students[0]));

function getStudentInfo(student) {
	const info = {
		course: student.course,
		name: student.name,
		averageMark: parseFloat(getAverageMark(student)),
	};
	return info;
}

console.log(getStudentInfo(students[0]));

function getStudentsNames(students) {
	const names = students.map((student) => student.name);
	return names.sort();
}

console.log(getStudentsNames(students));

function getBestStudent(students) {
	let bestStudent = students[0];
	let bestAverageMark = parseFloat(getAverageMark(students[0]));

	for (const student of students) {
		const averageMark = parseFloat(getAverageMark(student));
		if (averageMark > bestAverageMark) {
			bestStudent = student;
			bestAverageMark = averageMark;
		}
	}

	return bestStudent.name;
}

console.log(getBestStudent(students));

function calculateWordLetters(word) {
	const letterCount = {};
	for (const letter of word) {
		if (letterCount[letter]) {
			letterCount[letter]++;
		} else {
			letterCount[letter] = 1;
		}
	}
	return letterCount;
}

console.log(calculateWordLetters("тест"));
