// Middleware in Express
//Middleware is a function which will act as a barrier/runs request and response
// and response
const express = require('express')
const app = express()
// express cant decide which data is coming, it confuses between filetype , json type, etc.
app.use(express.json())

const ValidationMiddleware = (req, res, next) => {

    const { email, password } = req.body

    if (!email || !password) {
        return res.send("Enter Credentials first")
    }

    if (!email.includes("@") || !email.endsWith(".com")) {
        return res.send("Enter Valid email")
    }

    // console.log("Login Successful")
    next()
}

const authMiddleware = (req, res, next) => {
    const{email,password}=req.body
    const usermail="user@gmail.com"
    const pass="123"
    if(email==usermail && password==pass){
        next()
    }
    else{
        res.status(400).send("Please enter valid email and password")
    }
}

// Login
app.post("/login", ValidationMiddleware, authMiddleware, (req, res) => {
    res.send("Login Successful")
})

// Profile
app.get("/profile", ValidationMiddleware, authMiddleware, (req, res) => {
    res.send("Welcome to profile page")
})
app.get("/contact", (req, res) => {
    res.send("Welcome to contact page")
})
// Home
app.get("/", (req, res) => {
    res.send("Welcome to home page")
})

app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000")
})