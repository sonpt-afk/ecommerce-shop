import express from 'express'
import exitHook from 'async-exit-hook'
import {mongodb} from './config/mongodb'
import { env } from './config/environment'
import { APIs_V1 } from './routes/v1'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware'
import cors from 'cors'
import { corsOptions } from './config/cors'

const START_SERVER = () => {
  const app = express()

  // Xử lý CORS
  app.use(cors(corsOptions))

  app.use(express.json())

  // Use APIs V1
  app.use('/v1', APIs_V1)

  // Middleware xử lý lỗi tập trung
  app.use(errorHandlingMiddleware)

  // Môi trường Production (cụ thể hiện tại là đang support Render.com)
  if (env.BUILD_MODE === 'production') {
    app.listen(process.env.PORT, () => {
      // eslint-disable-next-line no-console
      console.log(
        `3. Production: Hi ${env.AUTHOR}, Back-end Server is running successfully at Port: ${process.env.PORT}/`
      )
    })
  } else {
    // Môi trường Local Dev
    app.listen(env.LOCAL_DEV_APP_PORT, env.LOCAL_DEV_APP_HOST, () => {
      // eslint-disable-next-line no-console
      console.log(
        `3. Hello ${env.AUTHOR}, Back-end Server is running successfully at host: ${env.LOCAL_DEV_APP_HOST} and port: ${env.LOCAL_DEV_APP_PORT}/`
      )
    })
  }

  // Thực hiện các tác vụ cleanup trước khi dừng server
  // Đọc thêm ở đây: https://stackoverflow.com/questions/14031763/doing-a-cleanup-action-just-before-node-js-exits
  exitHook(() => {
    console.log('4. Server is shutting down...')
    CLOSE_DB()
    console.log('5. Disconnecting from MongoDB Cloud Atlas...')
  })
}

(async () => {
  try {
    console.log('1. Connecting to MongoDB Cloud Atlas...')
    await CONNECT_DB()
    console.log('2. Connecting to MongoDB Cloud Atlas...')

    START_SERVER()
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
})()

