import express from 'express'
import { StatusCodes } from 'http-status-codes'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({
      message: 'da lay danh sach hanh trong gio'
    })

  })
  .post((req, res) => {
    res.status(StatusCodes.CREATED).json({
      message: 'da them moi vao gio hang'
    })
  })



export const cartRoute = Router
