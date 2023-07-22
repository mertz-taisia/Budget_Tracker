const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require('./models/Users');

const cors = require('cors');

app.user(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://tmertz:Tais%40%402003@cluster0.xg1lq.mongodb.net/Budget_Tracker_DB?retryWrites=true&w=majority");

app.get("/getUsers", (req, res) => {
    UserModel.find({}).then(result => {
        res.json(result);
    }).catch(err => {
        res.json(err);
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
})

app.listen(3001, () => {
    console.log("SEVRER RUNS");
});
