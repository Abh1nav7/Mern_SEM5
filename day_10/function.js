// function
// if you want to repeart certain snippet of code multiple times then we can wrap that in one method called functions

// function greet(){
//     console.log("welcome") // function declaration
// }
// greet() // function calling 

// function calculateProduct(a,b){ // parameters
//     // console.log(a*b)

//     return a*b // we can store value of return 
// }

// // calculateProduct(12,5)// arguments

// function calculateSubtraction(a,b){
//     // console.log(a-b)
//     return a-b
// }

// //apidata --> fetchfunction-->console.log() it will take a alot of memory 

// let result = calculateProduct(5,4)+calculateSubtraction(3,2)
// console.log(result)

// function Expression 

// let x = function(a,b){
//     return a%b
// }

// console.log(x,(9,3))

//Arrow function 
// let checkEven=(a)=>a%2==0

// let prod=()=>{
//     let b=14
//     let a=3
//     return a*b
// } 

// console.log(checkEven(13))
// console.log(prod())

//Default Parameter

let checkNationality=(country="Indiian")=>{ // here we gave a default parameter if function is called without passing any value 
    return `Nationality of this person is ${country}`
}

// let res=checkNationality("American")
// console.log(res)
console.log(checkNationality())