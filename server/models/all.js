const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const allSchema = new Schema({
    category:{
        type: Number,
        required: true
    },
    hostel:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        required: true
    }
})

const shop = mongoose.model("shop",allSchema);
module.exports = shop;