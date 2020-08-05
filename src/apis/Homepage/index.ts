import express from 'express';

export async function Homepage(_req: express.Request, res: express.Response): Promise<void> {
  res.render('index');
}
