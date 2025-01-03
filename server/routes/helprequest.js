const express = require('express');
const router = express.Router();
const { createRequest, getRequests, updateRequest } = require('../controllers/helpRequestController');

router.post('/', createRequest);
router.get('/', getRequests);
router.put('/:id', updateRequest);

module.exports = router;
