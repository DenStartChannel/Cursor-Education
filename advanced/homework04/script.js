const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
	"Диференційне рівняння",
	"Теорія автоматів",
	"Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
	const pairs = [];
	const maleStudents = students.filter(
		(student) => student.endsWith("р") || student.endsWith("й")
	);
	const femaleStudents = students.filter((student) => student.endsWith("а"));

	for (let i = 0; i < maleStudents.length; i++) {
		pairs.push([maleStudents[i], femaleStudents[i]]);
	}

	return pairs;
}

function assignProjects(pairs, themes) {
	const assignedProjects = [];

	for (let i = 0; i < pairs.length; i++) {
		const pair = pairs[i];
		const project = [pair.join(" і "), themes[i]];
		assignedProjects.push(project);
	}

	return assignedProjects;
}

function assignMarks(students, marks) {
	const studentMarks = [];

	for (let i = 0; i < students.length; i++) {
		const studentMark = [students[i], marks[i]];
		studentMarks.push(studentMark);
	}

	return studentMarks;
}

const pairs = getPairs(students);
const assignedProjects = assignProjects(pairs, themes);
const studentMarks = assignMarks(students, marks);

console.log(pairs);
console.log(assignedProjects);
console.log(studentMarks);
