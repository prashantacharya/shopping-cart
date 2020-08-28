const mongoose = require('mongoose')

const ProductSchema   = mongoose.Schema({
name: {
    type: String,
    required: true
},
price: {
    type: String,
    required: true
},
avatar: {
    type: String,
    required: true
}
});   

module.exports = mongoose.model('products', ProductSchema);