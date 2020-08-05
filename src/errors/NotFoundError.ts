import BaseError from './BaseError';

export default class NotFoundError extends BaseError {
  constructor(appErrorCode: number, message: string) {
    super(404, appErrorCode, message);
  }
}
