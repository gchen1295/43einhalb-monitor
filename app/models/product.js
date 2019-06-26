const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productID: {
        type: String,
    },
    productVariants: [String]
});

module.exports = mongoose.model('product', productSchema);