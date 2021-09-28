//variables,primitive types
// var, let const..........string,number,boolean,null,date, udefined


var myname = " sediq"
let age = 30;
const isfootballer = true
const profession ="footballer"

const statement1 = "my name is" + myname
const statement2 = `my name is ${myname} and i am ${age} years old. i am a ${profession}`
console.log(statement2)

console.log(myname);
console.log(age);
console.log(isfootballer);
// console.log(profession);

let fam = "Abubakar sediq"
let age2 = " 25"
let jet = "footballer"
const statement3 = `my name is ${fam} and i am ${age2} years old. i am a ${jet}`
console.log(statement3)

// +,-,/, *,==,==, !=, !== &&, ||, !

//declare two variables
// let a = 23;
// let t = 43;
// let b = 23+43;
// console.log(b)
// let c = 5;
// let d = 5;
// let e = 5*5;
// console.log(e)
// let i = 100;
// let j = 50;
// let k = 100-50;
// console.log(k)
// //=, ==, ===
// let num1 = 5;
// let str1 = "5";
// let eql = num1 == str1;
// let eq2 = num1 === str1;

// console.log(eql);
// console.log(eq2);
let num3 = 7;
let num4 = 12;
let num5 = 7;
let str2 = "12"
let str3 = "age";
// let eq3 = num3 !== num4;
// const eq4 =num3 !== num5;
// console.log(eq4)
// console.log(eq3);


//conditionals
// &&, ||, !
if (num4 === str3) {
console.log("are the equal");
} else{
    console.log("condition is false and so i ran");
}

let country = "nigeria";
// let ghana = " ghanian"
// let kenya = " kenyian"

if (country === "nigeria"){
    console.log(`you are a ${country}`);
}else if (country === ghanian) {
    console.log(`you are a ${country}`);
}else if (country === "kenyian") {
    console.log(`you are a ${country}`);
}else {
    console.log("i no sabi your country");
}
//read up on ternary operator,&&, ||,! switch statement,for loop
 
// let firstname = "abubakar";
// let lastname = "sediq";
// let fullname = firstname + " " + lastname;
// console.log(fullname.toUpperCase());
//  let result = fullname.toLowerCase()
//  console.log(result)
//  console.log(fullname.length)
//  let index = firstname.indexOf('k')
//  console.log(index)
 
// let star = "man";
// let stari = 'woman';

// if (star === stari ){
//     console.log(`ALLOW IN`)
// }else {
//     console.log(`dont allow in`)
// }

let mood = 18;
if (mood < 17) {
    console.log('yes u can drive')
}else {
    console.log ( "no u cant drive")
}

//ternary 
let drinkingAge = 100;
let isoverage =  typeof drinkingAge === "number" ? true :false;
console.log(isoverage)
 let isoverage2 = drinkingAge >= 18 ? "you are an adult" : "you are underage";
console.log(isoverage2)

// && || , !
//AND
let name1 = "frank"
let lang1 = "javasript"
let age1 = 23;
// if (name1 === "frank" && lang1 === "javasript" && age1 == "23") {
//     console.log("we might see something in our browser");
// }

//OR
if (age1 === 23 || name1 === "wealth"){
    console.log("whatever");
}
 // null, undefined, false, 0 ""
//NOT
 let zero = 0;
 let empty = ""
let valueNull = null;

if (!zero) {// null, udefined,0 "".......NOT, checks for falsy values
    console.log("let see");
}
if (!empty){
    console.log("lets go")
}
if (!valueNull) {
    console.log( "seeen")
}
