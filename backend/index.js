const express = require("express");
const mongoose = require("mongoose");
const todos = require("./routes/todos");
const signUp = require("./routes/signUp");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todos);
app.use("/api/signup", signUp);

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
        // useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
    })
    .then(() => console.log("MongoDB connection established..."))
    .catch((error) =>
        console.error("MongoDB connection failed:", error.message)
    );

// mongodb+srv://<username>:<password>@cluster0.sojl394.mongodb.net/?retryWrites=true&w=majority
