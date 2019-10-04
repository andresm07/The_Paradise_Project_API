/**
 * Filename: base-exception.model.ts
 * Author: kduran@akurey.com
 * Date: 04/05/2019
 * Description: Base Exception Model
 */

export default class BaseException extends Error {

    public status?: number;
  
    constructor(message: string, status: number) {
      super(message);
      this.message = message;
      this.status = status;
      Error.captureStackTrace(this, this.constructor);
    }
  }