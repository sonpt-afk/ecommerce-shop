import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
})

const UserModel = mongoose.model('Shoe', UserSchema);

export default UserModel;