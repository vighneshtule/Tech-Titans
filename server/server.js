const express = require("express");
const userRoutes = require("./routes/users.js");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Integrate user routes
app.use("/api/users", userRoutes);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

const connectDB = require('./config/db');
require('dotenv').config();
connectDB();


