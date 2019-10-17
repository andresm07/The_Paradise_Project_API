/**
 * Filename: calendario.controller.ts
 * Author: 
 * Date: 04/10/2019
 * Description: Controller File for all Calendario actions
 */

import { NextFunction, Request, Response } from 'express';

import atractivosHelper from '../helper';
import { SuccessResponse, ErrorResponse } from '../../common/utils';
export default class AtractivosController {
  /**
   * Calls method to gets the information about ofices rooms,
   * and response the list of rooms or the error if it catchs someone
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  public static async getDistritos(req: Request, res: Response, next: NextFunction)
  {
    try {
      const result = await atractivosHelper.getDistritos();
      return SuccessResponse(res, result);
    } catch (error) {
      return ErrorResponse(res, error);
    }
  }

  public static async getLugares(req: Request, res: Response, next: NextFunction)
  {
    try {
      // agregar parametro
      const result = await atractivosHelper.getLugares();
      return SuccessResponse(res, result);
    } catch (error) {
      return ErrorResponse(res, error);
    }
  }

  public static async getLugaresxID(req: Request, res: Response, next: NextFunction)
  {
    try {
      // agregar parametro
      const result = await atractivosHelper.getLugaresxID();
      return SuccessResponse(res, result);
    } catch (error) {
      return ErrorResponse(res, error);
    }
  }
}
