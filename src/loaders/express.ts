import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';

export default async ({app}: { app: express.Application }): Promise<express.Application> => {
  app.get('/status', (_req, res) => {
    res.status(200).end();
  });
  app.head('/status', (_req, res) => {
    res.status(200).end();
  });

  app.enable('trust proxy');
  app.set('views', `${__dirname}/../../views`);
  app.set('view engine', 'mustache');
  app.engine('mustache', mustacheExpress(`${__dirname}/../../web/views`, '.mustache'));

  app.use(express.static(`${__dirname}/../../web/assets`));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());

  return app;
};
