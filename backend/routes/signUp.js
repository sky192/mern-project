//Joi
//does user exits?
//create new user
//Hash password => bcrypt
//save user

const Joi = require("joi");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(min).max(200).required(),
        password: Joi.string().min(6).max(200).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
});
