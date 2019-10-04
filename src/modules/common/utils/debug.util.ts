/**
 * Filename: debug.util.ts
 * Author: kduran@akurey.com
 * Date: 04/05/2019
 * Description: Debug Util
 */

import _debug from 'debug';
import { NextFunction, Request, Response } from 'express';

/**
 * Default debug-instance
 * @type {debug.IDebugger}
 */
export const debug = _debug('express-typescript:app');

/**
 * Inject debug to req.debug
 * @returns {(req: e.Request, res: e.Response, next: e.NextFunction) => void}
 */
export const debugMiddleware = () =>
(req: Request, res: Response, next: NextFunction): void => {
  next();
};
