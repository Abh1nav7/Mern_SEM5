const express = require("express");
const app = express();
const fs = require("fs");
const { json } = require("stream/consumers");
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Welcome to Homepage");
});

app.get('/users', (req,res)=>{
    const data = fs.readFileSync("./db.json","utf-8");
    const users=JSON.parse(data)
    res.send(users);
})
app.post('/users', (req, res) => {
    const data = fs.readFileSync("./db.json", "utf-8");
    const users_array = JSON.parse(data);
    const newUser = req.body;
    users_array.users.push(newUser);
    // Save updated array back to db.json
    fs.writeFileSync(
        "./db.json",
        JSON.stringify(users_array)
    );
    console.log(users_array);
    res.send("Data saved");
});

app.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000/")
});