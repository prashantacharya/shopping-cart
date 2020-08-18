const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema   = new Schema({
user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
},
text: {
    type: String,
    required: true
},
name: {
    type: String,
    required: true
},
product: {
    type: String,
    required: true
},
price: [
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }
],
quantity: {
    type: String,
    required: true
},
total: {
    type: String,
    required: true
}
})   

module.exports = Product = mongoose.model('products', ProductSchema);