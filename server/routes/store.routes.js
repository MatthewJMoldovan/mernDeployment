const express = require('express');

const { 
    handleCreateStore,
    handleGetAllStores,
    handleGetStoreById,
    handleUpdateStoreById,
    handleDeleteStoreById
    } = require('../controllers/store.controller');

const router = express.Router();

router.post('/', handleCreateStore);
router.get('/', handleGetAllStores);
router.get('/:id', handleGetStoreById)
router.put('/:id', handleUpdateStoreById )
router.delete('/:id', handleDeleteStoreById)

module.exports = {
    storeRouter: router
}