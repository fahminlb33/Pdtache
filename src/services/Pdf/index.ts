import {v4 as uuid} from 'uuid';
import puppeteer from 'puppeteer';

import ErrorCodes from '../../errors/AppErrorCodes';
import InternalServerError from '../../errors/InternalServerError';

import * as logger from '../../helpers/logger';
import * as wrapper from '../../helpers/wrapper';
import * as DTO from './service_model';
import Minio from '../../infrastructure/minio';
const context = 'Service-Pdf';

export default class PdfService {

  _minio: Minio = new Minio();

  public async GeneratePdfStore(payload: DTO.GeneratePdfStoreDto): Promise<wrapper.Wrapped<DTO.GeneratePdfResponseDto>> {
    const browser = await puppeteer.launch({ args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'
    ]});
    //const browser = await puppeteer.launch();

    try {
      const page = await browser.newPage();
      await page.goto('https://google.com', {waitUntil: 'networkidle0'});
      const pdf = await page.pdf({ format: 'A4' });

      const id = `${uuid()}.pdf`;
      await this._minio.Save(id, pdf);
      console.log(payload.body);

      return wrapper.data({
        id: id,
        url: this._minio.GetUrl(id)
      })
    } catch (error) {
      logger.error(`${context}:GeneratePdfStore`, 'Error when generating PDF', error);
      throw new InternalServerError(ErrorCodes.InternalError, error);
    }
    finally {
      await browser.close();
    }
  }

  public async GeneratePdfEphemeral(payload: DTO.GeneratePdfEphemeralDto): Promise<void> {
    const browser = await puppeteer.launch({ args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'
    ]});

    try {
      const page = await browser.newPage();
      await page.goto('https://google.com', {waitUntil: 'networkidle0'});

      const pdf = await page.pdf({ format: 'A4' });
      payload.expressResponse.contentType('application/pdf');
      payload.expressResponse.send(pdf);
    } catch (error) {
      logger.error(`${context}:GeneratePdfEphemeral`, 'Error when generating PDF', error);
      throw new InternalServerError(ErrorCodes.InternalError, error);
    }
    finally {
      await browser.close();
    }
  }

  public async ListPdf(): Promise<wrapper.Wrapped<DTO.ListPdfResponseDto>> {
    return wrapper.data({ items: await this._minio.FindAll() });
  }

  public async DeletePdf(payload: DTO.DeletePdfDto): Promise<wrapper.WrappedEmtpy> {
    await this._minio.Delete(payload.documentId);
    return wrapper.success();
  }

}

