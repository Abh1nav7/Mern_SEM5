
//setInterval
// console.log("start")
// setTimeout(()=>{
//     console.log("Getting executed after 3 seconds")
// },3000)

// console.log("end")

//setInterval--> this will perform certain task repeatedly after specfic time
let count=0;
let counter=document.getElementById("num")
let id;
id=setInterval(() => {
    count++
    counter.innerHTML=count
    if(count==3){
    clearInterval(id)
}
},1000);

