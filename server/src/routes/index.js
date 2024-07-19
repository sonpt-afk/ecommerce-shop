import express from 'express'
import { cartRoute } from './cart.js'
import { accountRoute } from './account.js'
const {createUser,handleLogin,getUser,getAccount} = require('../controllers/userController')
const {addProduct } = require('../controllers/productController')
const delay = require("../middleware/delay.js")
const auth = require("../middleware/auth.js")
const routerAPI = express.Router()

routerAPI.all("*",auth)
// cart APIs
routerAPI.use('/cart', cartRoute)


routerAPI.get("/", (req,res) => {
  return res.status(200).json("hello world with api")
})

routerAPI.post("/register",createUser)
routerAPI.post("/login",handleLogin)
routerAPI.get("/user",getUser)
routerAPI.post("/products",addProduct)
routerAPI.get("/account",getAccount)

module.exports = routerAPI
