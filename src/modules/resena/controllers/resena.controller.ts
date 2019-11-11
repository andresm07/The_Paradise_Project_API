/**
 * Filename: calendario.controller.ts
 * Author:
 * Date: 04/10/2019
 * Description: Controller File for all Calendario actions
 */

import { NextFunction, Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from '../../common/utils';
import resenaHelper from '../helper';

export default class ResenaController {
  /**
   * Calls method to gets the information about ofices rooms,
   * and response the list of rooms or the error if it catchs someone
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  public static async getMision(req: Request, res: Response, next: NextFunction) {
    resenaHelper.getMision().then((result) => {
      return SuccessResponse(res, result);
    })
    .catch((err) => {
      return ErrorResponse(res, err);
    });
  }

  public static async getVision(req: Request, res: Response, next: NextFunction) {
    resenaHelper.getVision().then((result) => {
      return SuccessResponse(res, result);
    })
    .catch((err) => {
      return ErrorResponse(res, err);
    });
  }

  public static async getResena(req: Request, res: Response, next: NextFunction) {
    resenaHelper.getResena().then((result) => {
      return SuccessResponse(res, result);
    })
    .catch((err) => {
      return ErrorResponse(res, err);
    });
  }
}
