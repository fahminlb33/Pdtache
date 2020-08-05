import express from 'express';
import config from './infrastructure/config';
import loaders from './loaders';
import * as logger from './helpers/logger';
const context = 'App-EntryPoint';

async function StartServer() {
  const app = express();

  await loaders(app);
  app.listen(config.port, () => { logger.debug(context, `Server is running at: ${config.port}`); });
}

StartServer();
