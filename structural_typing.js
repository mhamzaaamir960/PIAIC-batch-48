// interface Ball  {
//     diameter:number;
// }
export {};
// interface  Sphere   {
//     diameter: number;
// }
// let ball : Ball = {
//     diameter:20
// }
// let sphere : Sphere = {
//     diameter: 30
// }
// ball = sphere
// sphere = ball
// interface Tube {
//     diameter: number;
//     length: number;
// }
// let tube : Tube = {
//     diameter:4,
//     length:10
// } 
// ball = tube;
// sphere = tube;
// tube = ball;
// ball =  {diameter:4,length:10} 
// let data1 = {name:"Hamza",age:25,city:"Rawalpindi"} // Freash object
// let data2 = {name:"Hamza",age:25}   // fresh object
// data2 = data1; // data1 works as a stale object;
// data2 = {name:"Hamza",age:25,city:"Rawalpindi"};
//  DIFFerence b\w interface and type
// interface data {
//     name:string,
//     city:string,
// }
// type data3 = {
//     name:string,
//     city:string
// }
// interface data4 extends data {
//     course:string
// }
// let abc :data4 = {
//    name:"Hamza",
//    city:"ISB",
//    course: "WEB#"
// }
// nested objects
// type Author = {
//     firstName: string;
//     lastName: string;
// };
// type Book = {
//     author: Author;
//     name: string;
// };
// const myBook : Book = {
//     author: {
//         firstName: "Zia",
//         lastName: "Khan"
//     },
//     name: "My Best Book"
// }
// interface Author {
//     firstName: string;
//     lastName: string;
// }
// interface Book {
//     author: Author;
//     name:string
// }
// let book : Book = {
//     author: {firstName:"Zia",lastName: "Khan"},
//     name: "Best book"
// }
// intersection types 
// interface student_data1 {
//     name:string;
//     course :string;
// }
// interface student_data2 {
//     name1: string;
//     course1: string
// }
// let $data : student_data1 & student_data2 = {
//     name: "Hamza",
//     course:"AI",
//     name1:"ALi",
//     course1:"web3"
// }
// interface Student {
//     student_id: number;
//     name: string;
//   }
// interface Teacher {
//     teacher_Id: number;
//     teacher_name: string;
// }
// type intersected_type = Student & Teacher;
// let obj1: intersected_type = {
//     student_id: 3232,
//     name: "rita",
//     teacher_Id: 7873,
//     teacher_name: "seema",
// };
// console.log(obj1.teacher_Id);
// console.log(obj1.name);
// Any
// let myval: any;
// myval = true; // OK
// myval = 42; // OK
// myval = "hey!"; // OK
// myval = []; // OK
// myval = {}; // OK
// myval = Math.random; // OK
// myval = null; // OK
// myval = undefined; // OK
// myval = () => { console.log('Hey again!'); }; // OK
//Unknown
// let value: unknown;
// value = true; // OK
// value = 42; // OK
// value = "hey!"; // OK
// value = []; // OK
// value = {}; // OK
// value = Math.random; // OK
// value = null; // OK
// value = undefined; // OK
// value = () => { console.log('Hey again!'); }; // OK
// Assigning a value of type unknown to variables of other types
// let val: unknown;
// const val1: unknown = val; // OK
// const val2: any = val; // OK
// const val3 : boolean = val// Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error
// explicit casting
// let myname: unknown = 10;
// let myname2 = myname as number;
// // console.log(myname2)
// if( typeof myname2 === `number`) {
//      console.log(`true`)
// } else {
//     console.log(`false`)
// }
// enum 
// enum teachers {
//     Zia_khan = "Zia khan",
//     usman = "Usman",
//     rehan = "Rehan",
// }
// console.log(teachers);
// let $teachers : teachers = teachers["Zia_khan"]
// const enum 
// const enum Color {Red, Green, Blue};//starts with 0
// let c: Color = Color.Red
// const enum Color1 {Red = 1, Green, Blue};
// let colorName: Color1 = Color[2]; //Not allowed with const enums
// console.log(colorName);
// const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2.Blue;
// console.log(colorIndex);
