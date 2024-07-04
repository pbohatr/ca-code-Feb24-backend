const express = require('express');
const router = express.Router();
const admin = require('../model/adminschema')
const bcrypt = require('bcrypt')




const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingemail = await admin.findOne({ email: email });
        if (!existingemail) {
            return res.status(400).send({ message: 'Account does not exist' });
        }
        const isMatched = await bcrypt.compare(password, existingemail.password);
        if (!isMatched) {
            return res.status(400).send({ message: 'Invalid password' });
        }
        res.status(201).json({ message:'login sucessfully'});
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
}



module.exports = {
    adminLogin
  
  
  }