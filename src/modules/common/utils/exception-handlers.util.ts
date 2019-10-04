/**
 * Filename: exception-handlers.util.ts
 * Author: kduran@akurey.com
 * Date: 04/05/2019
 * Description: Exception Handlers Util
 */

import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import APIException from './../models/api-exception.model';

const VALIDATION_ERROR = 'validation error';

/**
 * Convert exception to ApiException
 * @param err
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {e.NextFunction} next
 */
export const convertToApiException = (err: any, req: Request, res: Response, next: NextFunction): void => {
  if (!(err instanceof APIException)) {
    const apiError = new APIException(err.message, err.status);
    if (err.message === VALIDATION_ERROR) {
      apiError.validationErrors = err.errors;
    }
    return next(apiError);
  }
  return next(err);
};

/**
 * 404-exception
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {e.NextFunction} next
 */
export const notFoundException = (req: Request, res: Response, next: NextFunction): void => {
  const err = new APIException('Not found', httpStatus.NOT_FOUND);
  return next(err);
};
