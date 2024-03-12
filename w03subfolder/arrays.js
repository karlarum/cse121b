//Activity 1 - Map -------------

const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();

//Activity 2 - Map -------------

const letterGrades = ["A", "B", "C"];
function gradesToGpa(letterGrade) {
    let points = 0;
    if (letterGrade === "A") {
        points = 4;
    } else if (letterGrade === "B") {
        points = 3;
    }
    return points;
}
const gpa = letterGrades.map(gradesToGpa);
console.log(gpa);

//Activity 3 - Reduce -------------

const gpaFinal = gpa.reduce((total, item) => total + item) / gpa.length;
console.log(gpaFinal);

//Activity 4 - Filter -------------

const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortFruits = fruits.filter  (function (fruit) {
    return fruit.length < 6;
});
console.log(shortFruits);

//Activity 5 - indexOf -------------

const numbers = [12, 34, 21, 54];
const luckNumber = 21;
let luckIndex = numbers.indexOf(luckNumber);
console.log(luckNumber);