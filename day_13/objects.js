// let person ={
//     name:"Aman",
//     age:20,
//     address:"Shimla",
//     marks:[30,40]
// }
// console.log(person)
// console.log(person.address) // dot method od accessing
// console.log(person['age']) // sqaure brackets method of accessing 

// let product= new Object()
// product['product_name']="iphone 14"
// product['price']=64000 
// product['price']=70000 //updating object properties
// console.log(product)

// let obj ={model:"Tesla",color:"Red"}
// delete obj.color
// console.log(obj)

// let obj ={model:"Tesla"}; //checking existing of properties
// console.log("color"in obj)
// console.log(obj.hasOwnProperty("model"));


// let obj ={name:"Sourav",age:23}
// for(let key in obj){
//     console.log(key+":"+obj[key])
// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// let obj ={name:"Sourav",age:23}
//  console.log(Object.keys(obj).length) 


// Nested Objects ==> Api response

// let student={
//     name:"Rahul",
//     age:21,
//     address:{
//         city:"Delhi",
//         state:"Delhi",
//         pincode:11001
//     }
// }
// console.log(student.address.pincode);

// let respone={
//     success:true,
//     user:{
//         name:"rahul",
//         email:"rahul@gmail.com",
//         address:{
//             city:"Delhi",
//             country:"India"
//         }
//     }
// }
// console.log(respone.user.address.country)
// let student={
//     name:"Rahul",
//     age:21,
//     city:"Delhi",
//     id:{
//         adharid:67676767,
//         pan:"ABHC346788"
//     }
// }

// let {name:studentName,age,city,id:{adharid,pan}}=student
// console.log(studentName)
// console.log(age)
// console.log(city)
// console.log(pan)

