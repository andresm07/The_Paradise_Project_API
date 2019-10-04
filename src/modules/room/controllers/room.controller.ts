/**
 * Filename: event.controller.ts
 * Author: kduran@akurey.com
 * Date: 05/10/2019
 * Description: Controller File for all Rooms actions
 */

import { NextFunction, Request, Response } from 'express';
import roomHelper from '../helper';
import { SuccessResponse, ErrorResponse } from '../../common/utils';
import { IAuth } from '../../common/interfaces';
export default class RoomController {
  /**
   * Calls method to gets the information about ofices rooms,
   * and response the list of rooms or the error if it catchs someone
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  public static async getRooms(req: Request, res: Response, next: NextFunction)
   {
    const auth = new IAuth(req.body.token);
    auth.oAuth2Client.setCredentials(auth.token);
    try {
      const result = await roomHelper.getRoomsName(auth.oAuth2Client);
      return SuccessResponse(res, result);
    } catch (error) {
      return ErrorResponse(res, error);
    }
  }
}
