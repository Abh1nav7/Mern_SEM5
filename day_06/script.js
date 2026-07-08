// how js works 

// console.log(a);// undfeined
// var a=20;

// web page -->html,css,js 
//browser uses js engine to run script

//Chrome -->v8 engine
//internet explorer --> Chakra 
//firefox --> Spider monkey

//node -->v8 engine
// var name = "Kartik";
// function fun1(){
//     let a=10;
//     console.log(a);
// }

// fun1();
// console.log(name);


// // call stack will get formed when script runs

// console.log(num); //--> out of which hositing will happen for var and let, so the output will be undefined for var and reference error for let.
// console.log(age);

// var num=30 
// let age=30 

// Asynchronous JavaScript 
// Synchronous JS
// Javascript is a single threaded language it will  perfom one task at a time, it will not move to the next task until the current task is completed.4

// console.log("Start");
// let age=30;
// if(age>18){
//     console.log("Person is eligible for vote");
// }
// else{
//      console.log("Person is  not eligible for vote");
// }

// function greet(){
//     console.log("Welcome to Chitkara")
// }
// greet()
// console.log("End");

let a=20

setTimeout(function(){
    console.log("greet")
}, 4000)

console.log(a)