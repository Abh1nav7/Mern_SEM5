const express = require('express') // imported express framework
const fs=require("fs")
const { json } = require('stream/consumers')
const app = express()
//get,post,put,delete,patch
app.use(express.json())// this is reading json data fro client
app.get("/",(req,res)=>{
    res.send("Welcome to Express Application")
})
app.get("/students", (req,res)=>{
    const data = fs.readFileSync("students.json","utf-8");
    const students = JSON.parse(data);
    res.send(students);
});

app.post("/students",(req,res)=>{
    const data = fs.readFileSync("students.json","utf-8");
    const students =JSON.parse(data)
    console.log(students)
    const newStudent={"id":students.length+1,...req.body}
    students.push((newStudent))
    fs.writeFileSync("students.json", JSON.stringify(students))
    res.send("student submitted successfully")
})

app.listen(8080,()=>{
    console.log("Server is running in http://localhost:8080/")
})


// Create Read

