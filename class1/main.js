import arr from "./index.js";
console.log(`Array 3 => ${arr}`);
let colors = ["White", "Black", "Red"];
// console.log(chalk.bgBlue(colors))
// union literals
// union  => |
// literals => specific => 10
let color = ["black", "green", "white"];
color = [12, 23, 43];
color = true;
let traffic_lights = "Red";
traffic_lights = "Orange";
// console.log(traffic_lights)
// ternery 
let newAge = Math.random() > 0.6 ? "Khan" : 60;
// if(newAge === "Khan") {
//     console.log(newAge)
// } else {
//      console.log(newAge)
// }
let rand = Math.floor(Math.random() * 10);
// console.log(rand)
let rand2 = rand > 5 ? "Black" : "white";
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
};
student_data.city;
student_data["home address"];
console.log(student_data["home address"]);
student_data.course.first = "IOT";
console.log(student_data.course.first);
// let ab : myType = [12] // error
let abc = ["hamza"];
function sum(num) {
    return num;
}
sum(true);
let data = {
    name: "hamza",
    age: 19,
    city: "Rawalpindi"
};
let obj = {
    name: "hamza",
    age: 19,
    city: "RWP"
};
