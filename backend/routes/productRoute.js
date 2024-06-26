const express = require("express");
const {protect} = require('../middleWare/authMiddleWare');
const { createProduct, gettingData, getAllProducts, updateProduct, deleteProduct} = require("../controllers/productController");
const { upload } = require("../utils/fileUpload");
const productRouter = express.Router();



productRouter.post('/Add-product',protect,upload,createProduct);
productRouter.patch('/updateProduct/:id',protect,upload,updateProduct);
productRouter.get('/GetAllProducts'/* ,protect */,getAllProducts);
productRouter.get('/Get-Product/:productId',protect,gettingData);
productRouter.delete('/deleteProduct/:id',protect,deleteProduct);

module.exports = productRouter;