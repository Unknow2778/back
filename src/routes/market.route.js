const express = require('express');
const marketService = require('../services/market.service');

const router = express.Router();

//route to get all users
router.get('/', marketService.getAllMarkets);

//add a new market data
router.post('/addMarket', marketService.addMarket);

//get all market products
router.get('/allMarkets', marketService.getAllMarkets);

//get market by name
router.get('/marketByName/:name', marketService.getMarketByName);

//add category
router.post('/addCategory', marketService.addCategory);

//get categories
router.get('/categories', marketService.getCategories);

//add product
router.post('/addProduct', marketService.addProduct);

//get all products
router.get('/products', marketService.getProducts);

//add product price in market
router.post('/addProductPrice', marketService.addProductPrice);

//get all market products
router.get('/allMarketProducts', marketService.getAllMarketProducts);

module.exports = router;
