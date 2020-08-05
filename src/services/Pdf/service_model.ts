import {Response} from 'express';

export interface GeneratePdfStoreDto {
  html_url?: string,
  html_raw?: string,
  body: any
}

export interface GeneratePdfEphemeralDto {
  html_url?: string,
  html_raw?: string,
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
