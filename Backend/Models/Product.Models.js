const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
    name: { type: String },
    category: { type: String },
    productdescription: { type: String },
    price: { type: Number },
    quantity: { type: Number ,default:1},
    discount: { type: Number },
    country: { type: String,default:"India" },
    item: { type: String },
    image: { type: String },
    filename: { type: String },
    type:{type:String}
}, {
    timestamps: true
})
const ProductModel = mongoose.model("product", ProductSchema);

module.exports = {
    ProductModel
}


