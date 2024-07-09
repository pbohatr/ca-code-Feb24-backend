const express = require('express');
const PartyService = require('../services/party.service');

const PartySave = async (req, res) => {
    try {
        await PartyService.addParty(req.body, req.params.id, req.user._id);
        res.status(200).send("OK");
    } catch (error) {
        res.status(500).json(error);
    }
};

const getParties = async (req, res) => {
    try {
        const allData = await PartyService.getAllParties(req.params.id, req.user._id);
        res.status(200).json(allData);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    PartySave,
    getParties
};