import joi from 'joi';
import Joi from 'joi';

export const GeneratePdfStoreSchema = joi.object({
  html_url: joi.string().when('html_raw', {is: joi.exist(), then: Joi.optional(), otherwise: joi.required()}),
  html_raw: joi.string().optional(),
  body: joi.object().required()
});

export const GeneratePdfEphemeralSchema = joi.object({
  html_url: joi.string().when('html_raw', {is: joi.exist(), then: Joi.optional(), otherwise: joi.required()}),
  html_raw: joi.string().optional(),
  body: joi.object().required()
});

export const DeletePdfSchema = joi.object({
  documentId: joi.string().uuid().required()
});
