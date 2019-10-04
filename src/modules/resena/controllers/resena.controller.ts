/**
 * Filename: calendario.controller.ts
 * Author: 
 * Date: 04/10/2019
 * Description: Controller File for all Calendario actions
 */

import { NextFunction, Request, Response } from 'express';

import resenaHelper from '../helper';
import { SuccessResponse, ErrorResponse } from '../../common/utils';
export default class ResenaController {
  /**
   * Calls method to gets the information about ofices rooms,
   * and response the list of rooms or the error if it catchs someone
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  public static async getMision(req: Request, res: Response, next: NextFunction)
  {
    try {
      const result = await resenaHelper.getMision();
      return SuccessResponse(res, result);
    } catch (error) {
      return ErrorResponse(res, error);
    }
  }

  public static async getVision(req: Request, res: Response, next: NextFunction)
  {
    try {
      const result = await resenaHelper.getVision();
      return SuccessResponse(res, result);
    } catch (error) {
      return ErrorResponse(res, error);
    }
  }

  public static async getResena(req: Request, res: Response, next: NextFunction)
  {
    try {
      const result = await resenaHelper.getResena();
      return SuccessResponse(res, result);
    } catch (error) {
      return ErrorResponse(res, error);
    }
  }
}
