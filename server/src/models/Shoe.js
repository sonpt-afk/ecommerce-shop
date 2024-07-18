import mongoose from 'mongoose';
import Joi from 'joi';

const ShoeSchema = new mongoose.Schema({
    name: String,
    image: String,
    countInStock: Number
})

const Shoe = mongoose.model('shoe', ShoeSchema);

module.exports =  Shoe;