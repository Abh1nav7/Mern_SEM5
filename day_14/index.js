// ES^ => 6th version of javascript. EcmaScript 2015.


// introduced let const, arro functions, template literals, spread , rest , default parameter


// // template literals->
// let name = "Aman"
// let age = 28

// // this was before es6 feature called template literal
// console.log("My name is"+ name +" and my age is"+age);  // too many plus signs here
// console.log(`My name is ${name}  my age is ${age}`);  


// // Destructuring
// let obj={
//     moviename: "Avataar",
//     rating: 4.7
// }

// console.log(obj.moviename) //to avoide too many obj. writing, we destructure

// let {moviename, rating}=obj


// console.log(rating)


// let arr=[10,20,30,40]
// let[a,c,b]=arr
// console.log(a,b)

// //spread operator(...)
// // spread operator copies all or parth of an existing array or object into  another array or object

// let arr1=[10,20,30]
// let arr2=arr1
// arr2.push(90)
// console.log(arr1)
// console.log(arr2)


// let arr3=[40,50,60]
// let arr4=[...arr3]
// arr4.push(100)
// console.log(arr3) 
// console.log(arr4)

// let fruits=["Apple","Mango"]
// let vegetables=["Potato",'Tomato']
// let food=[...fruits,...vegetables]
// console.log(food)

// let user={
//     name:"Aman",
//     age:25
// }

// let newUser={...user}
// console.log(newUser)

// let newUser={...user,city:"shimla"}
// console.log(newUser)
// Updating property

// let user={
//     name:"Aman",
//     age:25
// }

// // let newUser={...user,age:32}
// // console.log(newUser)
// // 
// let newUser={age:32,...user}// order of // spread operator matters here 
// console.log(newUser)


// Rest operator(...)

// function calculateSum(a,...nums){
//     console.log(a,nums)
// }
// calculateSum(10,20,30,40,50,60)

// Default Parameter
function nationality (country="India"){
    console.log(`This person belongs to ${country}`)
}
nationality()
nationality("USA")
