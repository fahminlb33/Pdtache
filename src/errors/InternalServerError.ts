import BaseError from './BaseError';

export default class InternalServerError extends BaseError {
  constructor(appErrorCode: number, message: string) {
    super(500, appErrorCode, message);
  }
}
