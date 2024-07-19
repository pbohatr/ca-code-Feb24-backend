const express = require('express');
const CategoryService = require('../services/category.service');

const CategorySave = async (req, res) => {
    try {
        // console.log("req>>>",req.body)
        const {id} = req.params
        // console.log("reqparams>>>",{id} )
        const categoryData = await CategoryService.addCategory(req.body,req.params.id);
        console.log("categoryData",categoryData)
        res.status(200).send(categoryData);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getCategory = async (req, res) => {
    try {
        const {id} = req.params
        // console.log("reqparams>>>",{id})
        const categoryData = await CategoryService.getCategory(req.params.id);
        // console.log("categoryData",categoryData)
        res.status(200).send(categoryData);
    } catch (error) {
        res.status(500).json(error);
    }
}


const getAllCategory = async (req, res) => {
    try {
        const categoryData = await CategoryService.getAllCategory();
        // console.log("categoryData",categoryData)
        res.status(200).send(categoryData);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    CategorySave,
    getCategory,
    getAllCategory
      };