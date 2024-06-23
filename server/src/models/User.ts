import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    phone: String,

})

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;