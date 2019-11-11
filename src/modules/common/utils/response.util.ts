/**
 * Filename: index.ts
 * Author: kduran@akurey.com
 * Date: 04/15/2019
 * Description: Response Utils
 */

import { Response } from 'express';
import status from 'http-status';

/**
 * Create a successful Response
 * @param {e.Response} res
 * @param {Object} data
 * @param {number} code
 */
export const SuccessResponse = (
  res: Response,
  data: any,
  code?: number,
): Response => {
  if (typeof code !== 'undefined') {
    res.statusCode = code;
  }
  return res.send(data);
};

/**
 * Create an error Response
 * @param {e.Response} res
 * @param {e.Error} err
 * @param {number} code
 * @returns {Response}
 */
export const ErrorResponse = (
  res: Response,
  err: any,
  code?: number
): Response => {
  let error = err;
  if (typeof err === 'object' && typeof err.message !== 'undefined') {
    error = err.message;
  }
  if (typeof code !== 'undefined') {
    res.statusCode = code;
  } else {
    res.statusCode = status.INTERNAL_SERVER_ERROR;
  }
  const response = {
    error,
    success: false,
    validationErrors: err.validationErrors,
  };
  return res.json(response);
};