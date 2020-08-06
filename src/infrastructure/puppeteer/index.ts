import puppeteer from 'puppeteer';
import config from '../config';

export default class PuppeteerWrapper {

  static async CreatePuppeteer(): Promise<puppeteer.Browser> {
    if (config.isInDocker){
      return await puppeteer.launch({ args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage'
      ]});
    }
    else
    {
      return await puppeteer.launch();
    }
  }

}

