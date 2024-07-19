const express = require('express');
const CategoryService = require('../services/category.service');

const CategorySave = async (req, res) => {
    try {
        console.log("req>>>", req.body)
        const { id } = req.params
        console.log("reqparams>>>", { id })
        const categoryData = await CategoryService.addCategory(req.body, req.params.id);
        console.log("categoryData", categoryData)
        res.status(200).send(categoryData);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getCategory = async (req, res) => {
    try {
        const { id } = req.params
        console.log("reqparams>>>", { id })
        const categoryData = await CategoryService.getCategory(req.params.id);
        console.log("categoryData", categoryData)
        res.status(200).send(categoryData);
    } catch (error) {
        res.status(500).json(error);
    }
}


const getAllCategory = async (req, res) => {
    try {
        const categoryData = await CategoryService.getAllCategory();
        console.log("categoryData", categoryData)
        res.status(200).send(categoryData);
    } catch (error) {
        res.status(500).json(error);
    }
}

const changeCategory = async (req, res) => {
     console.log("req.params",req.params)
    //  console.log("userid",req.user._id)
     console.log("req.body",req.body)
    try {
        const updatedCategory = await CategoryService.updateCategorydetails(req.params,req.user._id, req.body);
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json(error);
    }
}




const CategoryDelete = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("CategoryDelete", { id })
        const result = await CategoryService.deleteCategory(id);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    CategorySave,
    getCategory,
    getAllCategory,
    changeCategory,
    CategoryDelete
};