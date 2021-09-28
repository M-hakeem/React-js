// alert("whatever");

// alert("My name is mohammed");

// variable, primitive types
// var, let, const....string, number, boolean, null, Date, undefined

var myname = "mohammed";
let age = 20;
const isFootballer = true;
const profession = "Footballer";

const statement = `My name is ${myname} and i am ${age} years old. i am a ${profession}`;
console.log(statement);

console.log(myname);
console.log(age);
console.log(isFootballer);
console.log(profession);

console.log(typeof myname);
console.log(typeof age);
console.log(typeof isFootballer);

//classwork
let myFullname = "mohammed abdulhakeem";
let myAge = 20;
let myProfession = "Web Developer";

let biodata = `${myFullname} is ${myAge} years old and he is a ${myProfession}`;
console.log(biodata);

// +, - . /, *, %, ==,===, !=, !==, <=, >=
let a = 5;
let b = 5;
let c = a * b;

a += 1;
b -= 1;

console.log(a);
console.log(b);
console.log(c);

const num1 = 7;
const num2 = "7";
const num3 = 8;
const eq1 = num1 != num2;
const eq2 = num1 !== num2;

console.log(eq1);
console.log(eq2);

/** Conditional Statement && || !*/
if (num1 === num2) {
  console.log("are they equla...");
} else {
  console.log("Invalid number");
}

//const country = "Nigerian";
const country = "Ghanian";
// const country = "Kenyian";

if (country === "Nigerian") {
  console.log(`You are a ${country}`);
} else if (country === "Ghanian") {
    console.log(`You are a ${country}`);
} else if (country === "Kenyian")  {
    console.log(`You are a ${country}`);
} else{
    console.log("I no sabi your country")
}
//Ternary Operator:two conditions
const drinking_age = 12;
const isOverAge = typeof drinking_age === "number" ? true : false;
const isOverAge2 = drinking_age >= 18 ? "you are an adult" : "you are underage";
console.log(isOverAge);
console.log(isOverAge2);

// &&, ||, !
const name1 = "frank";
const lang1 = "javascript";
const age1 = 23;

// if (name1 === "frank" && lang1 === "javascript" && age1 == "23"){
//   console.log("We might see something in our browser");
// }
if (age1 === 23 || name1 === mohammed){
  console.log("whatever")
}

// null, underfined, false, 0, ""
const zero = 0;
const empty = "";
const valueNull = null;

if (!zero){
  console.log("lets see")
}  
if (!empty){
  console.log("print value")
}
if (!valueNull){
  console.log("print number")
}
if (!name1){ // null , undefined, 0, ""...falsy values
  console.log("this is a value so u wont see anything")
}

//* SWITCH STATEMENT