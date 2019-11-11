/**
 * Filename: calendario.controller.ts
 * Author:
 * Date: 04/10/2019
 * Description: Controller File for all Calendario actions
 */

import { NextFunction, Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from '../../common/utils';
import atractivosHelper from '../helper';

export default class AtractivosController {
  /**
   * Calls method to gets the information about ofices rooms,
   * and response the list of rooms or the error if it catchs someone
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  public static async getDistritos(req: Request, res: Response, next: NextFunction) {
    atractivosHelper.getDistritos().then((result) => {
      return SuccessResponse(res, result);
    })
    .catch((err) => {
      return ErrorResponse(res, err);
    });
  }

  public static async getLugares(req: Request, res: Response, next: NextFunction) {
    const nameDistrito = req.body.nameDistrito;
    atractivosHelper.getLugares(nameDistrito).then((result) => {
      return SuccessResponse(res, result);
    })
    .catch((err) => {
      return ErrorResponse(res, err);
    });
  }

  public static async getLugaresxID(req: Request, res: Response, next: NextFunction) {
    const nameDistrito = req.body.nameDistrito;
    const namePlace = req.body.namePlace;
    atractivosHelper.getLugaresxID(nameDistrito, namePlace).then((result) => {
      return SuccessResponse(res, result);
    })
    .catch((err) => {
      return ErrorResponse(res, err);
    });
  }
}
