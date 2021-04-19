// DOM Elements
const projectOne = document.getElementById("project1");
const projectTwo = document.getElementById("project2");
const projectThree = document.getElementById("project3");
const numberOne = document.getElementById("one");
const numberTwo = document.getElementById("two");
const numberThree = document.getElementById("three");
const projectsSection = document.getElementById("projects-section3");
const projectOneBack = document.getElementById("project1-back-btn");
const projectTwoBack = document.getElementById("project2-back-btn");
const projectThreeBack = document.getElementById("project3-back-btn");
const time = document.getElementById("time");

// Projects function
let gettingProject = function () {
  numberOne.style.cursor = "pointer";
  projectOne.style.transition = "transform 1s ease-in-out";
  projectOne.style.transform = "translate(0px, 1500px)";
};

let gettingProjectTwo = function () {
  numberTwo.style.cursor = "pointer";
  projectTwo.style.transition = "transform 1s ease-in-out";
  projectTwo.style.transform = "translate(0px, 1500px)";
};

let gettingProjectThree = function () {
  numberThree.style.cursor = "pointer";
  projectThree.style.transition = "transform 1s ease-in-out";
  projectThree.style.transform = "translate(0px, 1500px)";
};

let resetProject3 = function () {
  projectThree.style.transition = "transform 1s ease-in-out";
  projectThree.style.transform = "translate(-4000px, 1500px)";
};
projectThreeBack.onclick = resetProject3;

let resetProject2 = function () {
  projectTwo.style.transition = "transform 1s ease-in-out";
  projectTwo.style.transform = "translate(-4000px, 1500px)";
};
projectTwoBack.onclick = resetProject2;

let resetProject = function () {
  projectOne.style.transition = "transform 1s ease-in-out";
  projectOne.style.transform = "translate(-4000px, 1500px)";
};
projectOneBack.onclick = resetProject;

// Projects Event Listeners
numberOne.addEventListener("click", gettingProject);
numberTwo.addEventListener("click", gettingProjectTwo);
numberThree.addEventListener("click", gettingProjectThree);

// Showtime
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // const amPm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Run
showTime();
