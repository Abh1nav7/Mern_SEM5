// import React from 'react'

import { useState } from "react";

const Greet = () => {
    const[title,setTitle]=useState("")
    const handleClick= (name) =>{
        alert(`Welcome ${name}`);
    }
    const handleChange=(event)=>{
        console.log(event)
        setTitle(event.target.value)
    }
  return (
    <div>
      <button onClick={()=>handleClick("Rahul")}>Greet</button>
      <input type="text" onChange={handleChange} 
      />
      <br />
      <h2>Title:{title}</h2>
    </div>
  )
}

export default Greet
