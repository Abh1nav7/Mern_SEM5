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
    const newUser ={...req.body,id:users_array.users.length+1};

    // Save updated array back to db.json
    //find => to check if a user with the same email already exists
    const existingUser = users_array.users.find(user => user.email === newUser.email);
    if (existingUser) {
        return res.status(400).send("User with this email already exists");
    }
    else{
    users_array.users.push(newUser);
    fs.writeFileSync(
        "./db.json",
        JSON.stringify(users_array)
    );
    console.log(users_array);
    res.send("Data saved");
    }
});

app.get("/users/:id", (req, res) => { 
    //param contains key value pair object in which all key
    // will be word written infornt of :{colon}
    // req.params=>{"id":1,"subid":2}
    const userId=+req.params.id; // convert string to number
    // console.log(typeof(userId))
    const data = fs.readFileSync("./db.json", "utf-8");
    const users_array = JSON.parse(data);
    const find_user=users_array.users.find((el)=>el.id===userId);
    if(find_user){
        res.send(find_user);
    }
    else{
        res.send("User does not exist in the database")
    }
    res.send(req.params)
})
app.delete("/users/:id", (req, res) => {    
    const userId=+req.params.id; // convert string to number
    const data = fs.readFileSync("./db.json", "utf-8");
    const users_array = JSON.parse(data);
    // const find_user=users_array.users.find((el)=>el.id===userId);
    // if(find_user){
    const deleted_data=users_array.users.filter((el)=>el.id!==userId);
        fs.writeFileSync(
            "db.json",
            JSON.stringify(users_array)
        );
        res.send("User deleted successfully");
})

app.put("/users/:id", (req, res) => {
    const userId=+req.params.id;
    const data = fs.readFileSync("./db.json", "utf-8");
    const users_array = JSON.parse(data);
    const find=users_array.users.find((el)=>el.id===userId);
    if(find){
      find.user_name=req.body.name;
      find.email=req.body.email;
        fs.writeFileSync("db.json", JSON.stringify(users_array));
        res.send("User updated successfully");
    }
    else{
        res.send("User does not exist in the database")
    }
})

app.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000/")
});