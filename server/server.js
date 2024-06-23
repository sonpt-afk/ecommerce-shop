import express from 'express'
import exitHook from 'async-exit-hook'
import { CLOSE_DB, CONNECT_DB } from '~/config/mongodb'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/index'
import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware'
import cors from 'cors'
import { corsOptions } from '~/config/cors'
import {config} from 'dotenv'
import mongoose from 'mongoose';

const START_SERVER = () => {
  const app = express()

  // Xử lý CORS
  app.use(cors(corsOptions))

  // Enabel req.body json data
  app.use(express.json())

  // Use APIs V1
  app.use('/v1', APIs_V1)
  // Middleware xử lý lỗi tập trung
 
  app.use(errorHandlingMiddleware)
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  app.listen(env.LOCAL_DEV_APP_PORT, () => {
    console.log(`Example app listening on port ${env.LOCAL_DEV_APP_PORT}`)
  })
  // mongoose.connect(env.MONGODB_URI ?? "")
  // .then(() => {
  //     console.log('Connected to MongoDB ')
  //     app.listen(env.LOCAL_DEV_APP_PORT,() => {
  //       console.log(`Example app listening on port ${env.LOCAL_DEV_APP_PORT}`)
  //     })
  // })
  
}


START_SERVER()
