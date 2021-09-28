// =========== ARRAYS ==========
const arr = [6, "hello", null, 3, "another", "world"];

console.log(arr);
console.log(arr[4]);
console.log(arr.length);
console.log(arr[40]);

// Array method ... push, pop, shift, unshift
// push : add to the right
arr.push("david");
console.log("================================");
console.log(arr)

// Unshift : add to the left
arr.unshift("mohd")
console.log("================================");
console.log(arr);

// shift : remove from the left
arr.shift()
console.log("================================");
console.log(arr);

// pop : remove from the right
arr.pop()
console.log("================================");
console.log(arr);

// loop over arrays using for each loops

let moh =  {
    name: "Mohammed",
    age:30,
    profession: "Developer",
    country: "Nigeria"  
}

let david =  {
    name: "david",
    age:25,
    profession: "Developer",
    country: "Nigeria"  
}

let sadiq =  {
    name: "sadiq",
    age:20,
    profession: "Developer",
    country: "Nigeria"  
}

const students = [moh, david, sadiq];

students.forEach((stu) => {
    const statement = `${stu.name} is ${stu.age} years old ${stu.profession} from ${stu.country}`;
    console.log(statement)
})
// classwork
const numArray = [0,1,5,7,9,3,8];
numArray.forEach((num) => {
    if (num%2==0){
        console.log(num,"even");
    } else {
        console.log(num,"odd")
    }
})

// declare functions . use arrow function
// call a function
// pass a parameter to function
// return statement