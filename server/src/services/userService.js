
const User = require("../models/User");
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require("jsonwebtoken")
const createUserService = async (name,email,password) => {

    try {
         //check user exist
         const user = await User.findOne({email})
         if(user){
             console.log('user exist, chon 1 email khac');
             return null;
         }

        //hash password
        const hashPassword = await bcrypt.hash(password, saltRounds)
        let result = await User.create({
            name: name,
            email: email,
            password: hashPassword,
                })
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}


const loginService = async (email,password) => {

    try {
        //fetch user by email
        const user = await User.findOne({email: email})
        if(user){
            //compare password
            const isMatchPassword =  bcrypt.compare(password, user.password)
            if(!isMatchPassword){
                return {
                    EC: 2,
                    EM: 'Email/pass không hợp lệ'
                }
            }else{
                //create access token
                const payload = {
                    email: user.email,
                    name: user.name,
                }
                const access_token = jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {
                        expiresIn: process.env.JWT_EXPIRE
                    }
                )
                return {
                    EC:0,
                    access_token,
                    user:{
                        email: user.email,
                        name: user.name
                    }
                }
            }
        }   
        else{
            return {
                EC: 2,
                EM: 'Email/pass không hợp lệ'
            }
        }
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const getUserService = async () => {

    try {
       
        //save user to db
        let result = await User.find({})
           
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}


module.exports = {
    createUserService,loginService,getUserService
}