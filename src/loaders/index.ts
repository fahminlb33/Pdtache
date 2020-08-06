import express from 'express';

import expressLoader from './express';
import errorHandlerLoader from './error_handler';
import routeHandler from '../apis/routes';

import * as logger from '../helpers/logger';
import config from '../infrastructure/config';

const context = 'App-Loader';

export default async (expressApp: express.Application): Promise<void> => {
  logger.Init();
  logger.debug(context, 'Running in Docker? ' + config.isInDocker);

  await expressLoader({app: expressApp});
  logger.debug(context, 'Express loaded.');

  await routeHandler({app: expressApp});
  logger.debug(context, 'Application routes loaded.');

  await errorHandlerLoader({app: expressApp});
  logger.debug(context, 'Centralized error handler loaded.');
};
