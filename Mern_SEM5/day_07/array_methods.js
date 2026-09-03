let arr = [2, 3, 4, 5, 6];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//foreach, map, filter, reduce => higher order functions (HOR) [A func that takes another func as arg]

// arr.forEach((i) => {
//     console.log(i);
//     // process.stdout.write(element.toString()+" ");
// });

// let sq = arr.map((i)=>i**2);

// console.log(sq)

// let products=[
//     {"name":"Iphone-15","price":70000},
//     {"name":"Samsung-Galaxy S24","price":90000},
//     {"name":"Motorola","price":20000}
// ]
// let prices=products.map((el)=>el.price)
// let names=products.map((el)=>el.name.toUpperCase())
// console.log(prices)
// console.log(names)

// filter -->this will also return an array based on certain condition
let num = [30,12,14,15,7,18,23,27]
let even =num.filter((el)=>{
    return el%2==0
})
console.log(even)
let even1 =num.map((el)=>{
    return el%2==0
})
console.log(even1)

// reduce --> it will perform certian 
// mathematical operation on your array and 
// returns single value

let numbers=[10,50,20]
let result=numbers.reduce((acc,el)=>{
    return acc+el
},7)
//accumulator--> starting value of any result 
console.log("result:",result)

//sort() this will return modified array
let ages=[10,2,30,40]
let sortedAges=ages.sort((a,b)=>a-b)
console.log(sortedAges)
let decendingAges=ages.sort((a,b)=>b-a)
console.log(decendingAges)