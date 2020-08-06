import joi from 'joi';

export const GeneratePdfStoreSchema = joi.object({
  html_raw: joi.string().allow('').optional(),
  html_url: joi.string().allow('').optional(),
  body: joi.object().required()
});

export const GeneratePdfEphemeralSchema = joi.object({
  html_raw: joi.string().allow('').optional(),
  html_url: joi.string().allow('').optional(),
  body: joi.object().required()
});

export const DeletePdfSchema = joi.object({
  documentId: joi.string().required()
});
