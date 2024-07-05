const express = require('express');
const UserService = require('../services/user.service');

const userSave = async (req, res) => {
    try {
        const newUser = await UserService.registerUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = {
    userSave
};