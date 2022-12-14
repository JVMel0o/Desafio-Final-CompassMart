import mongoose from 'mongoose'
import 'dotenv/config'

class Database {
  constructor () {
    this.connect()
  }

  connect () {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.rucvxcz.mongodb.net/?retryWrites=true&w=majority`)
    mongoose.connection.on('error', console.log.bind(console, 'Error connection.'))
    mongoose.connection.once('open', () => {
      console.log('Connected with database.')
    })
    return mongoose.connection
  }
}

export default new Database().connect()
