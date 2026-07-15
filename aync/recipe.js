let cardContainer=document.getElementById("cardContainer") // selected main div of cards here
// let url='https://dummyjson.com/recipes'
let fetchData=async(dish="")=>{
    let response=await fetch(`https://dummyjson.com/recipes/search?q=${dish}`)
    let data= await response.json()
    console.log(data.recipes)
    let arr=data.recipes
    // console.log(arr)
    cardContainer.innerHTML=""
    arr.forEach((el,index)=>{
        cardContainer.innerHTML+=`
        <div id ="d-${index}">
        <img src="${el.image}">
        <h3>${el.name}</h3>
        <p> Time: ${el.prepTimeMinutes}</p>
        <button onclick="handleDelete(${index})">Delete</button>
    
        </div>
        `
    })
}
fetchData()
function handleDelete(id){
    let div = document.getElementById(`d-${id}`)
    div.remove()
}
function handleSubmit(){
    let inp=document.getElementById("find").value
    fetchData(inp)
}
//diff between normal and arrow functions
