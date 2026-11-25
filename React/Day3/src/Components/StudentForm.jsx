// import React from 'react'

import { useState } from "react"

const StudentForm = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[age,setAge]=useState(17)
    const[url,setUrl]=useState("")

    const [student,setStudent]=useState(null)
    
    const handleform=(e)=>{
        e.preventDefault();
        console.log(name,email,age,url)
        setStudent({
            name,
            email,
            age,
            url
        })
    }
    
  return (
    <div style={{
        border:"1px solid black",
        padding:"20px",
        display:"flex",
        flexDirection:"column",
        gap:"20px",
        width:"500px"

    }}>
    <form onSubmit={handleform} >
        <label htmlFor="">Name: </label>
        <input type="text " value={name} onChange={(e)=>setName(e.target.value)}/>
        <br />
        <label htmlFor="">Email: </label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <label htmlFor="">Age: </label>
        <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>
        <br />
        <label htmlFor="">ImageUrl: </label>
        <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)}/>
        <br />
        <input type="submit"></input>

    </form>
    {
        student && <studentCard std={student}/>
            // {/* <h1>Name: {student.name}</h1>
            // <h3>Email: {student.email}</h3>
            // <h3>Age: {student.age}</h3>
            // <h3>Image URL: {student.url}</h3> */}
        // </div>
    }
    </div>
  )
}

export default StudentForm
