import express from 'express';
import cors from 'cors';

import { errors } from 'celebrate';
import routes from './routes';

class App {
  server: express.Application;

  constructor() {
    this.server = express();

    this.middleware();
    this.routes();
    this.handleErros();
  }

  private middleware() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  private routes() {
    this.server.use(routes);
  }

  private handleErros() {
    this.server.use(errors());
  }
}

export default new App().server;
