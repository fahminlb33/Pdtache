import express from 'express';

export async function Homepage(_req: express.Request, res: express.Response): Promise<void> {
  res.sendFile('index.html', {root: `${__dirname}/../../../web` });
}
