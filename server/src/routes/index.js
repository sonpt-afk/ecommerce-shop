import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { cartRoute } from './cart.js'
import { accountRoute } from './account.js'

const Router = express.Router()

// Check APIs v1/status
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'APIs V1 are ready to use.'
  })
})

// account APIs
Router.use('/account', accountRoute)

// Columns APIs
Router.use('/cart', cartRoute)

export const APIs_V1 = Router
