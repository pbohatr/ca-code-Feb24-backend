
const router = require('express').Router();
const Invoice = require('../controllers/invoice.controller')
const Middleware = require('../services/token.service')

router.post('/:id/create', Middleware.verifyToken, Invoice.InvoiceSave)
router.get('/:id/getAllInvoices', Middleware.verifyToken, Invoice.getInvoices)
router.patch('/:firmId/update/:id',Middleware.verifyToken, Invoice.updateInvoice)
// router.delete('/:firmId/delete/:id',Middleware.verifyToken, Party.partyRemove)

module.exports = router;
