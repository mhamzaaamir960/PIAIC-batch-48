// let fruits: string[] = ["Orange","Mango","Apple","Banana"]
// let fruits2  : Array<string> = ["Orange","Mango","Apple","Banana"];

// let names: string[] = [];
// names.push("Hamza","Waseq","Hayatullah"); // [ 'Hamza' ]
// // console.log("Before pop",names)
// names.pop()
// console.log(names)
// names.unshift("Omer","Wasif");
// console.log("After Unshift",names);
// names.shift()
// console.log(names)

// 20 array methods link
//  https://blog.canopas.com/typescript-array-methods-and-their-usages-daa8d498b4fd 

// functions 
// 1) Named function

// function void1():void {
//     console.log("hamza")
// }
// let abc = void1();
// console.log(abc)
// sum(2,3)
// function sum(a:number,b:number): string {
//     return `add numbes ${a + b}`
// }
// console.log(sum(2,3));

// //Anonymous function
// sum(2,3)  // Hoisting
// let sum = function(a:number,b:number): number {
//     return a * b
// }
// console.log(sum(2,3));
// console.log(abc)
// let abc = "hamza"
// console.log(abc)

// Anonymous function with explict type

// let myAdd2: (x:number, y:number)=>number = 	function(x, y) { 
//     return x+y; 
// };

// //type names dont matter
// let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
//     return x+y; 
// };


//Lambda functions															
// let myAdd4 = (a : number, b : number) => a+b

//         console.log(myAdd4(2,3))
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

// type GreetFunction = (a: string) => void;
// function greeter(fn: GreetFunction) {
	
// }
// // greeter()


// Optional parameters

//Named function with optional parameters
// function sum(a:number,b:number,c?:number) {
//     if(c) {
//         return a + b + c
//     }else {
//         return a + b
//     }
// }
// console.log(sum(2,3,5))

// default parameters

// function sum(a:number,b:number=5,c:number = 3) {
//     if(c) {
//         return a + b + c
//     }else {
//         return a + b
//     }
// }
// console.log(sum(2,2,2))

// Rest parameters

// function buildName(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
// 	return `first name ${firstName} with lastnames ${restOfName.join('|')}`;
// }
// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
// console.log(employeeName);




//anonymous function type with Rest parameters
// var buildNameFun: (fname: string, ...rest: string[])=>string =
// function (firstName: string, ...re: string[]) {
// 	return firstName + " " + re.join(" ");
// }

//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
					