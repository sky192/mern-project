const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Todo } = require("./models/todo");
console.log(Todo);

require("dotenv").config();

app.get("/", (req, res) => {
    res.send("wellcome to our todos api");
});

const connection_srting = process.env.CONNECTION_STRING;
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

mongoose
    .connect(connection_srting, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connection established..."))
    .catch((error) =>
        console.error("MongoDB connection failed:", error.message)
    );

// mongodb+srv://<username>:<password>@cluster0.sojl394.mongodb.net/?retryWrites=true&w=majority
