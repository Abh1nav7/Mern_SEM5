// console.log(Boolean(1))

// // undefiend, null, 0, nan, false is falsy value -->except this 6 value all values are truthy 
// let a="";
// console.log(Boolean(a))
// console.log(true+6) 

// Tyoe Conversion  // Explicit Type Conversion
// let a=50;
// let s = String(a)
// console.log(typeof(s))

// let str="123" // string
// let num=Number(str) // number
// console.log(typeof(num))


// let bool = "true" // string
// let res = Boolean(bool)// boolean
// console.log(typeof(res))


// // Implicit Type Conversion

// console.log("5"+5)//55
// console.log(7-"2")//5
// console.log("4"*3)//12


// let curr="400 Rs. Indian Rupee" // 400
// let curr="Rs. 400"//NaN
// console.log(parseInt(curr)) 


// let numString="567"
// let number=+(numString)
// console.log(typeof(number))


// let a= false
// let b=0;
// let c=null
// let z=a||b||c //if all the value are falsy then || will return last falsy value 
// console.log(z) //null  


// let a= false;
// let b = 'Vivek'
// let c= 'Rishi'
// let z=a||b||c
// console.log(z)

// let defaultUser="Vivek"
// let user ="Akash"
// console.log(defaultUser || user) 

// let a= 'Prachi'
// let b ='Vivek'
// let c= 'Rishi'
// let z = a && b && c; // if all values are true then && will return
// //last  truthy value 

// console.log(z)

// isAuthenticated && isAdmin && ShowUI


// let a= 0
// let b ='Vivek'
// let c= 'Rishi'
// let z = a && b && c; // if all values are true then && will return
// //last  truthy value 

// console.log(z) //0 


// Nullish coalision Operator

// 

let user ;
console.log(user ?? 'Loading...')
// works for undefined and null, if the  user is undefined or null, it will show the following message, same as alt  of img tag