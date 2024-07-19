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

const updateParty = async (req, res) => {
    try {
        const updatedParty = await PartyService.updatePartyDetails(req.params, req.user._id, req.body);
        res.status(200).json(updatedParty);
    } catch (error) {
        res.status(500).json(error);
    }
};

const partyRemove = async (req, res) => {
    try {
        await PartyService.deleteParty(req.params, req.user._id);
        res.status(200).send("OK");
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    PartySave,
    getParties,
    updateParty,
    partyRemove
};