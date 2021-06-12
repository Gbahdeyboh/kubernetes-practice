const express = require('express');
const app = express();

const userModel = require('../models/users');

app.get('/users', async (req, res) => {
    let users;

    try {
        users = await userModel.find();
    }catch(err){
        res.json({
            success: false,
            error: err
        })
    }

    res.json({
        success: true,
        payload: users
    })
})

app.post('/users', async (req, res) => {
    const { firstname, lastname, email, age, } = req.body;

    let userData;

    try{
        userData = await userModel.create({
            firstname,
            lastname,
            email,
            age,
        })
    }catch(err){
        res.json({
            success: false,
            error: err
        })
    }

    res.json({
        success: true,
        payload: userData,
    })
})


module.exports = app;
