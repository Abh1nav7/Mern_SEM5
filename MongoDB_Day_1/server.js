const express = require("express");
const {connection} = require("./config/db");

const app = express();

app.use(express.json());

app.listen(8000, async () => {
  try {
    await connection;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error starting server:", error);
  }
})