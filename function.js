// declare a function
const buttons = document.getElementById("buttons");
const divs = document.getElementById("newDiv");
buttons.addEventListener("click",addPrompt);
console.log(divs)


const numArray = [0, 1, 5, 7, 9, 3, 8];

// function declaration
function loopArray() {
    numArray.forEach((num) => {
        console.log(num);
    });
}
loopArray();

// call a function
// loop array

// function expression
const greetings = (name,age,profession) => {
    console.log(`Hi my name is ${name} i am ${age} years and i am a ${profession}`);
};
greetings("mohammed",24,"lawyer");

// classwork

function addNumbers(num1,num2) {
    const result = num1 + num2;
    return result;
};
// addNumbers(100,40);

// example two

const multiplyNumbers = (num1,num2,num3,num4) => {
    const solution = num1 * num2 * num3 * num4;
    return solution;
};
// multiplyNumbers(2,2,2,2);

const sumtotal = addNumbers(100,40) + multiplyNumbers(2,2,2,2);
console.log(sumtotal);

// calculate percentage
const calculatePercentage = (number) => {
    const result = number /100;

    return result;
};

const user1Percent = calculatePercentage(70);
const user2Percent = calculatePercentage(90);
const user3Percent = calculatePercentage(20);

const cumulative = user1Percent + user2Percent + user3Percent;
console.log(cumulative);

// Bring out prompt
function addPrompt () {
    const username = prompt("What is your name");

    const defaultName = !username ? "hello world" : username;

    divs.innerHTML = `My name is ${defaultName}`
};

setTimeout(() =>{
    console.log("first to log");
},5000);

console.log("second to log");
setTimeout(() =>{
    console.log("third to log");
},3000);

setTimeout(() =>{
    console.log("fourth to log");
},1000);

console.log("fifth to log");



