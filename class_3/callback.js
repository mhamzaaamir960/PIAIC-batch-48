// console.log("start");
// setTimeout(() => {
//     console.log("middle")
// }, 2000);
// console.log("end")
// task-1  (car setting)
// task-2  (do shop)
// task-3  (pick drees)
// task-4  (attend event)
// function car_set(callback:(text:string) => void) {
//     console.log("I drop my car at grage")
//     setTimeout(() => {
//         callback("Car is fixed and ready")
//         return dress(callback2)
//     }, 3000);
// }
// function callback(text:string):void {
//     console.log(text)
// }
// car_set(callback)
// setTimeout(() => {
//     console.log("DO shoping")
// }, 0);
// function dress(callback2: (text:string) => void) {
//     setTimeout(() => {
//         callback2("Dress is ready");
//     }, 2000);
// }
// function callback2(text:string) :void {
//     console.log(text)
// }
// setTimeout(() => {
//     console.log("attend event")
// }, 0);
// function abc(callback:((a:number)=> string)) {
//     setTimeout(() => {
//         callback(20)
//         return
//     }, 2000);
// }
// function ad(b:number):string {
//     return `${b}`
// }
// abc(ad)
setTimeout(() => {
    console.log("task-1");
    setTimeout(() => {
        console.log("task-2");
        setTimeout(() => {
            console.log("task-3");
            setTimeout(() => {
                console.log("task-4");
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);
export {};
