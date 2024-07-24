const express = require('express');
const InvoiceService = require('../services/invoice.service');

const InvoiceSave = async (req, res) => {
    try {
        await InvoiceService.addInvoice(req.body, req.params.id, req.user._id);
        res.status(200).send("OK");
    } catch (error) {
        res.status(500).json(error);
    }
};

const getInvoices = async (req, res) => {
    try {
        const allData = await InvoiceService.getAllInvoices(req.params.id, req.user._id);
        res.status(200).json(allData);
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateInvoice = async (req, res) => {
    try {
        const updatedInvoice = await InvoiceService.updateInvoiceDetails(req.params, req.user._id, req.body);
        res.status(200).json(updatedInvoice);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    InvoiceSave,
    getInvoices,
    updateInvoice
      };