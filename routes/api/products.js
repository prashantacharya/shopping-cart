const express= require('express');
const router = express.Router();

const Product = require('../../models/Product')

// @route GET api/products/test
// @desc   Tests products route
// @access   Public
router.get('/api/products', async(req,res)=> {
   const products = await Product.find({});
   res.json({products});
});

module.exports = router;