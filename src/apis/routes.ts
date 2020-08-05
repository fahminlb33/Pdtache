import express from 'express';

import * as homepageHandlers from './Homepage';
import * as pdfHandlers from './Pdf';

export default async ({ app }: { app: express.Application }): Promise<express.Application> => {

  app.get('/', homepageHandlers.Homepage);

  app.get('/pdf', pdfHandlers.ListPdf);
  app.post('/pdf/generate_store', pdfHandlers.GeneratePdfStore);
  app.post('/pdf/generate_ephemeral', pdfHandlers.GeneratePdfEphemeral);
  app.delete('/pdf/:documentId', pdfHandlers.DeletePdf);

  return app;
};
