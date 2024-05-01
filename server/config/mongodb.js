import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from './environment'

let storeDatabaseInstance = null

const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()

  storeDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}

export const GET_DB = () => {
  if (!storeDatabaseInstance) throw new Error('Must connect to Database first!')
  return storeDatabaseInstance
}

export const mongodb = {
  CONNECT_DB,
  CLOSE_DB,
  GET_DB

}