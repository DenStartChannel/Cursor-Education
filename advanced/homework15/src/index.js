import { task1 } from "./hw1/hw1";
import { task2 } from "./hw2/hw2";
import { task3 } from "./hw3/hw3";
import "./style.css"; // Імпорт CSS стилів
import exampleImage from "./images/example.jpg";

task1();
task2();
task3();

const img = document.createElement("img");
img.src = exampleImage;
document.body.appendChild(img);
