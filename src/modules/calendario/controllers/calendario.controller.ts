/**
 * Filename: calendario.controller.ts
 * Author:
 * Date: 04/10/2019
 * Description: Controller File for all Calendario actions
 */

import { NextFunction, Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from '../../common/utils';
import calendarioHelper from '../helper';

export default class CalendarioController {
  /**
   * Calls method to gets the information about ofices rooms,
   * and response the list of rooms or the error if it catchs someone
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  public static async getCalendario(req: Request, res: Response, next: NextFunction) {
    calendarioHelper.getEventos().then((result) => {
      return SuccessResponse(res, result);
    })
    .catch((err) => {
      return ErrorResponse(res, err);
    });
  }
}
