import express from 'express'
import { StatusCodes } from 'http-status-codes'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({
      message: 'chiu r'
    })
    console.log('got')

  })
  .post((req, res) => {
    res.status(StatusCodes.CREATED).json({
      message: 'an l r'
    })
    console.log('posted')
  })



export const cartRoute = Router
