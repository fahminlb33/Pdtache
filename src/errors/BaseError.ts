export default class ErrorResponse extends Error {
  appErrorCode: number;
  httpCode: number;

  constructor(httpCode: number, appErrorCode: number, message: string) {
    super();
    this.httpCode = httpCode;
    this.appErrorCode = appErrorCode;
    this.message = message;
  }
}
