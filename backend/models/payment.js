const mongoose = require("mongoose");
const PaymentSchema = new mongoose.Schema({
    name: String,
    address: String,
    mobile: String,
    pincode: String,
    productitems: String,
    totalproductprice: Number,
    dop: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending",
    },
});

module.exports = mongoose.model("payment", PaymentSchema);
