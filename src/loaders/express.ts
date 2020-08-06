import express from 'express';
import bodyParser from 'body-parser';

export default async ({app}: { app: express.Application }): Promise<express.Application> => {
  app.get('/status', (_req, res) => {
    res.status(200).end();
  });
  app.head('/status', (_req, res) => {
    res.status(200).end();
  });

  app.enable('trust proxy');

  app.use(express.static(`${__dirname}/../../web/assets`));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());

  return app;
};
