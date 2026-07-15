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

// let a=20

// setTimeout(function(){
//     console.log("greet")
// }, 4000)

// console.log(a)
// let arr=[
//     {"key":2,"name":"aman"},
//     {"key":3,"name":"partik"}
// ]

// console.log(arr[0].name)

// Call Back Function 
// when a function is passed as an argument to another function then it is called callback function

// function greetMessage(message){
//     message()//passing function as an argument

// }
// function greetWelcome(){
//     console.log("Welcome to chitkara")
// }
// greetMessage(greetWelcome)


// function calculate(a,b,operation){
//     operation(a,b)
// }

// function add(a,b){
//     console.log(a+b)
// }

// function prod(a,b){
//     console.log(a*b)
// }

// calculate(6,7,add)
// calculate(6,7,prod)

// h1.addEventListener("click",handleClick)


// setTimeout(function(){
//     console.log("Executed")
// }, 3000)


function executeDetails(id,callbck){
//     callback()
    console.log("start")
    setTimeout(function(){
        console.log("Id",id)
        callbck()
    },2000)

 }

// function authdata(){
//     console.log("User logged in ")
// }
// executeDetails(1,authdata)


// executeDetails(1,function(){
//     console.log("User Authenticated")
//     executeDetails(2,function(){
//         console.log("Post Fetched")
//     })
// })

// setTimeout(function(){
//     console.log("welcome")
// },2000)

// setTimeout(function(){
//     console.log("goodmorning")
// },2000)

//callbackhell
// executeDetails(1,function(){
//             console.log("User Authenticated")
//             executeDetails(2,function(){
//                 console.log("Post Fetched")
            
//             executeDetails(3,function(){
//                 console.log("Post visited")
            
//             executeDetails(3,function(){
//                 console.log("Post Fetched")
//              })
//         })
//     })
// })

// executeDetails().then(getPosts).then(profileVisted)

//Promise 

