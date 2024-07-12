import mongoose from 'mongoose';
import Joi from 'joi';
const Schema = mongoose.Schema;

const ShoeSchema = new Schema({
    name: String,
    size: Number,
    price: Number,
})

const ShoeModel = mongoose.model('Shoe', ShoeSchema);

export default ShoeModel;