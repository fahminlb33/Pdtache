import express from 'express';

import * as wrapper from '../helpers/wrapper';

export default async ({ app }: { app: express.Application }): Promise<express.Application> => {

  app.use((err: any, _req: express.Request, res: express.Response, _next: any) => {
    if (err.hasOwnProperty('httpCode')) {

      res.status(err.httpCode).json(wrapper.error(err));
    }
    else{
      res.status(500).json(wrapper.fatalError(err));
    }
  });

  return app;
};
