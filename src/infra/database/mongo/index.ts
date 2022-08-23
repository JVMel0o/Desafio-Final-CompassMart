import mongoose from 'mongoose';

class Database {
  constructor () {
    this.connect()
  }
  connect () {
    mongoose.connect(`mongodb+srv://1234:123@compassapi.q5yt5ki.mongodb.net/`);
    mongoose.connection.on('error', console.log.bind(console, 'Error connection.'));
    mongoose.connection.once('open', () => {
      console.log('Connection with database.');
    });
    return mongoose.connection;
    }
}

export default new Database().connect()