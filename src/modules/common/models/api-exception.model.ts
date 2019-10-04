/**
 * Filename: api-exception.model.ts
 * Author: kduran@akurey.com
 * Date: 04/05/2019
 * Description: Api Exception Model
 */

import httpStatus from 'http-status';
import BaseException from './base-exception.model';

export default class APIException extends BaseException {

  public validationErrors?: any;

  constructor(message: string, status: number = httpStatus.INTERNAL_SERVER_ERROR) {
    super(message, status);
  }
}
