//question 1
const q1 = document.querySelector("#question1");
const a1 = document.querySelector("#answer1");
//question 2
const q2 = document.querySelector("#question2");
const a2 = document.querySelector("#answer2");
//question 4
const q3 = document.querySelector("#question3");
const a3 = document.querySelector("#answer3");
//question 4
const q4 = document.querySelector("#question4");
const a4 = document.querySelector("#answer4");

q1.addEventListener("click", () => {
	a1.classList.toggle("hidden");
	a2.classList.add("hidden");
	a3.classList.add("hidden");
	a4.classList.add("hidden");
});

q2.addEventListener("click", () => {
	a2.classList.toggle("hidden");
	a1.classList.add("hidden");
	a3.classList.add("hidden");
	a4.classList.add("hidden");
});

q3.addEventListener("click", () => {
	a3.classList.toggle("hidden");
	a1.classList.add("hidden");
	a2.classList.add("hidden");
	a4.classList.add("hidden");
});

q4.addEventListener("click", () => {
	a4.classList.toggle("hidden");
	a1.classList.add("hidden");
	a2.classList.add("hidden");
	a3.classList.add("hidden");
});
