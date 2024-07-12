import express from 'express'
import { cartRoute } from './cart.js'
import { accountRoute } from './account.js'
const {createUser,handleLogin,getUser} = require('../controllers/userController')

const routerAPI = express.Router()


// cart APIs
routerAPI.use('/cart', cartRoute)


routerAPI.get("/", (req,res) => {
  return res.status(200).json("hello world with api")
})

routerAPI.post("/register",createUser)
routerAPI.post("/login",handleLogin)
routerAPI.get("/user",getUser)
module.exports = routerAPI
