const { model } = require('mongoose');
const { Store } = require('../models/store.model')

const handleCreateStore = async (req,res) => {
    console.log('controller: handleCreateStore', req.body);

    try {
        const store = await Store.create(req.body);
        return res.json(store)
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message});
    }
};

const handleGetAllStores = async (req,res) => {
    console.log('controller: handleGetAllStores');
    try {
        const stores = await Store.find()
        return res.json(stores)
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message});
    }
}

const handleGetStoreById = async (req,res) => {
    console.log('controller: handleGetStoreById', req.params);
    try {
        const store = await Store.findById(req.params.id)
        return res.json(store)
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message});
    }
}

const handleUpdateStoreById = async (req, res) => {
    console.log('controller: handleUpdateStoreById', req.params, req.body);
    try {
        const store = await Store.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true
        });
        return res.json(store)
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message});
    }
}

const handleDeleteStoreById = async (req,res) => {
    console.log('controller: handleDeleteStoreById', req.params);
    try {
        const store = await Store.findByIdAndDelete(req.params.id)
        return res.json(store)
    } catch (error) {
        return res.status(400).json({ ...error, message: error.message});
    }
}

module.exports = {
    handleCreateStore,
    handleGetAllStores,
    handleGetStoreById,
    handleUpdateStoreById,
    handleDeleteStoreById
}