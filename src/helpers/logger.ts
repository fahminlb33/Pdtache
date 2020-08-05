import config from '../infrastructure/config'
import winston from 'winston';

export let logger: winston.Logger;

export function Init() {
  logger = winston.createLogger({
    level: config.logging.level,
    exitOnError: false,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.File({ filename: '../logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: '../logs/combined.log' }),
    ],
  });

  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      level: config.logging.level,
      format: winston.format.combine(
        winston.format.json()
      )
    }));
  }
}

export function error(context: string, message: string, scope?: any) {
  logger.error({context, message, scope});
}

export function warn(context: string, message: string, scope?: any) {
  logger.warn({context, message, scope});
}

export function info(context: string, message: string, scope?: any) {
  logger.info({context, message, scope});
}

export function debug(context: string, message: string, scope?: any) {
  logger.debug({context, message, scope});
}
