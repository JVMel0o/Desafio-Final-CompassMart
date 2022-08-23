import express from 'express';
import cors from 'cors';
import './infra/database/mongo/index';
import products from './api/models/schemas/productSchema';

class App {
  public express: express.Application;

  public constructor () {
    this.express = express();
    this.middlewares();
  }

  private middlewares ():void {
    this.express.use(express.json({}));
    this.express.use(cors());
  }

}

export default new App().express;