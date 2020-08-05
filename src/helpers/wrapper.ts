import ErrorCodes from '../errors/AppErrorCodes';
import BaseError from '../errors/BaseError';

export function success(): WrappedEmtpy {
  return {
    success: true,
    appCode: ErrorCodes.Success,
    message: 'Request has been processed'
  };
}

export function data<T>(data?: any): Wrapped<T> {
  return {
    success: true,
    appCode: ErrorCodes.Success,
    message: 'Request has been processed',
    data
  };
}

export function error(err: BaseError): WrappedEmtpy {
  return {
    success: false,
    appCode: err.appErrorCode,
    message: err.message
  }
}

export function fatalError(err: Error): WrappedEmtpy {
  return {
    success: false,
    appCode: ErrorCodes.InternalError,
    message: err.message
  }
}

export interface Wrapped<T> {
  success: boolean,
  appCode: number,
  message: string,
  data: T
}

export interface WrappedEmtpy {
  success: boolean,
  appCode: number,
  message: string
}

