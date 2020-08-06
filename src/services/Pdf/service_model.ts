import {Response} from 'express';

export interface GeneratePdfStoreDto {
  html_url: string | null,
  html_raw: string | null,
  body: any
}

export interface GeneratePdfEphemeralDto {
  html_url: string | null,
  html_raw: string | null,
  body: any,
  expressResponse: Response
}

export interface DeletePdfDto {
  documentId: string
}

export interface GeneratePdfResponseDto {
  id: string,
  url: string
}

export interface ListPdfResponseDto {
  items: {
    id: string,
    url: string
  }[]
}
