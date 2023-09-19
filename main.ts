
import { array1 as b,array2 } from "./index.js";
import arr from "./index.js";

console.log(`Array 3 => ${arr}`)



// inquirer 

import inquirer from "inquirer";


// let abc =  await inquirer.prompt([
//     {
//         name: "Name",
//         type: "string",
//         message: chalk.yellow.bold("What is your name? " )
//     },
//     {
//         name: "Age",
//         type: "rawlist",
//         message: "What is your age",
//         choices: [18,19,20,21]
//     }
// ])
// console.log(abc)


// chalk 

import chalk from "chalk";

let colors = ["White","Black","Red"]

// console.log(chalk.bgBlue(colors))

// union literals

// union  => |
// literals => specific => 10

let color: string[] | number[] | boolean = ["black","green","white"]
color = [12,23,43]
color = true

let traffic_lights: "Red" | "Orange" | "Green"  = "Red"

traffic_lights = "Orange"

// console.log(traffic_lights)


// ternery 

let newAge = Math.random() > 0.6 ? "Khan": 60;

// if(newAge === "Khan") {
//     console.log(newAge)
// } else {
//      console.log(newAge)
// }


let rand = Math.floor(Math.random() * 10)
// console.log(rand)

let rand2 = rand > 5 ? "Black" : "white"
// console.log(rand2)

// Object 


let student_data = {
    name: "Hamza",
    age: 19,
    city: "Rawalpindi",
    ["home address"]: "RWP",
    course: {
        first: "WEB3",
        second: "AI"
    }
}

student_data.city
student_data["home address"]
console.log(student_data["home address"])

student_data.course.first = "IOT"
console.log(student_data.course.first)


// type alias

type myType = string | number | string[] | boolean

// let ab : myType = [12] // error

let abc : myType = ["hamza"]

function sum(num:myType) {
    return num
}
sum(true)

// type myType = string | number | string[] | boolean // type aliased

// object alias
type newType  =  {
     name: string,
     age: number,
     city: string
}

let data: newType = {
    name: "hamza",
    age: 19,
    city: "Rawalpindi"
}


let obj : {
    name: string,
    age: number,
    city: string
} = {
    name: "hamza",
    age:19,
    city: "RWP"
}