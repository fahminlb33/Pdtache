import express from 'express';
import joi from 'joi';

import ErrorCodes from '../../errors/AppErrorCodes';
import BadRequestError from '../../errors/BadRequestError';
import PdfService from '../../services/Pdf';

import * as validator_models from './validator_model';
import { logger } from '../../helpers/logger';
const context = 'Apis-Pdf';

export async function GeneratePdfStore(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
  try {
    const body = await validator_models.GeneratePdfStoreSchema.validateAsync(req.body);

    const pdfService = new PdfService();
    const data = await pdfService.GeneratePdfStore(body);

    res.json(data);
  }
  catch (err) {
    logger.error(`${context}:GeneratePdfStore`, 'Error in handler', err);
    if (err instanceof joi.ValidationError) {
      return next(new BadRequestError(ErrorCodes.InvalidBody, 'Request body is not valid. ' + err.message));
    }
    else {
      return next(err);
    }
  }
}

export async function GeneratePdfEphemeral(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
  try {
    const body = await validator_models.GeneratePdfEphemeralSchema.validateAsync(req.body);
    body.expressResponse = res;

    const pdfService = new PdfService();
    await pdfService.GeneratePdfEphemeral(body);
  }
  catch (err) {
    logger.error(`${context}:GeneratePdfEphemeral`, 'Error in handler', err);
    if (err instanceof joi.ValidationError) {
      return next(new BadRequestError(ErrorCodes.InvalidBody, 'Request body is not valid. ' + err.message));
    }
    else {
      return next(err);
    }
  }
}

export async function ListPdf(_req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
  try {
    const pdfService = new PdfService();
    const data = await pdfService.ListPdf();

    res.json(data);
  }
  catch (err) {
    logger.error(`${context}:ListPdf`, 'Error in handler', err);
    if (err instanceof joi.ValidationError) {
      return next(new BadRequestError(ErrorCodes.InvalidBody, 'Request body is not valid. ' + err.message));
    }
    else {
      return next(err);
    }
  }
}

export async function DeletePdf(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
  try {
    const body = await validator_models.DeletePdfSchema.validateAsync(req.params);

    const pdfService = new PdfService();
    const data = await pdfService.DeletePdf(body);

    res.json(data);
  }
  catch (err) {
    logger.error(`${context}:DeletePdf`, 'Error in handler', err);
    if (err instanceof joi.ValidationError) {
      return next(new BadRequestError(ErrorCodes.InvalidBody, 'Request body is not valid. ' + err.message));
    }
    else {
      return next(err);
    }
  }
}
