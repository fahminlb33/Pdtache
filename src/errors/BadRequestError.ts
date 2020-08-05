import BaseError from './BaseError';

export default class BadRequestError extends BaseError {
  constructor(appErrorCode: number, message: string) {
    super(400, appErrorCode, message);
  }
}
