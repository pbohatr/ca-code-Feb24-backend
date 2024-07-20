const express = require('express');
const ItemService = require('../services/item.service');


const ItemSave = async (req, res) => {
    try {
        console.log("req>>>>>", req.body, req.params.id)
        await ItemService.addItem(req.body, req.params.id, req.user._id);
        res.status(200).send("OK");
    } catch (error) {
        res.status(500).json(error);
    }
};

const getItem = async (req, res) => {
    try {
        const allData = await ItemService.getItemDetail(req.params.id, req.user._id);
        res.status(200).json(allData);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateItem = async (req, res) => {
    try {
        const updatedParty = await ItemService.updateItemDetails(req.params, req.user._id, req.body);
        res.status(200).json(updatedParty);
    } catch (error) {
        res.status(500).json(error);
    }
};
const itemRemove = async (req, res) => {
    try {
        await ItemService.deleteItem(req.params, req.user._id);
        res.status(200).send("OK");
    } catch (error) {
        res.status(500).json(error);
    }
}



module.exports = {
    ItemSave,
    getItem,
    updateItem,
    itemRemove

};