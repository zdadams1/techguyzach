const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: { type: String, required: true },
  price: {type: Number, required: true},
  description: {type: String, required: true},
  imageMain: {type: String, required: true},
  quantity: {type: Number, required: true},
  category: {type: String, required: true},
  type: {type: String, required: true},
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;