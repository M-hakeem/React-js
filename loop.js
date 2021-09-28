// let num = 7;
// for (let i = 0; i <= num ; i++) {
//     console.log(i)
// }
let total = 0;

// console.log(total);

for (let i = 0; i <=3; i++){
    total = total + 1;
}
// 1st -----> total = 1, i = 1
// 2nd -----> total = 2, i = 2
// 3rd -----> total = 3, i = 3
// 4th -----> total = 4, i = 4
// console.log(total);

//Classwork
let number = 5;
for (let i = 0; i < 9; i++){
    number = number + 5;
}
console.log(number);

//======== OBJECTS =======//
let moh = {
    name: "Mohammed",
    age:19,
    profession: "Developer",
    country: "Nigeria",
    address:{
        addr:"a"
    }
};
console.log(moh)
console.log(moh.name)
console.log(moh.address.addr)
const statement = `${moh.name} is ${moh.age} years old he lives in ${moh.country} and he's a ${moh.profession}`
console.log(statement)
//exercise
const frank = {
    profession: "Drummer",
    grades:{
        maths: "A",
        chemistry: "C",
        school:{
            primary:{
                First: "Faith Foundation",
                second: "Projaro"
            }
        }
    }
};
const output = `Frank attends ${frank.grades.school.primary.second} school he scores ${frank.grades.maths} in maths and ${frank.grades.chemistry} in chemistry. Also Frank is a good ${frank.profession}.`
console.log(output)

// /**
// * Grading scores of a course
// * A is 75 to 100
// * B is 60 to 74
// * C is 50 to 59
// * D is 40 to 49
// * F is below 40
// * any thing else "Invalid Scores" 
// */

// SWITCH STATEMENT
const fruit = "Banana";

switch (fruit) {
    case "Banana":
        console.log("The fruit is an apple");
        break;
    case "Orange":
        console.log("The fruit is an orange");
        break;
    default:
        console.log("All conditions failed so the fruit must be a Banana")
}

//Grading Score
const grading = prompt ("Enter Your Grade:");
num = parseInt(grading)
if (isNaN(num)){
    alert("Enter a Number")
}
else{
    switch (true){
        case (grading >= 75 && grading <=100) :
            alert("A")
            break;
        case (grading >=60 && grading <= 74):
            alert("B")
            break;
        case (grading >=50 && grading <= 59):
            alert("C")
            break;
        case (grading >=40 && grading <=49):
            alert("D")
            break; 
        case (grading <40):
            alert("F")
            break;   
        default:
            alert("I don't know your score")  
    };
    
}
