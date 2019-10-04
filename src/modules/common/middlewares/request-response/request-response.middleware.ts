/**
 * Filename: request-response.middleware.ts
 * Author: kduran@akurey.com
 * Date: 04/05/2019
 * Description: Preprocess and post process of the request and response objects
 */

import { Credential, Logger } from 'akore';
import { NextFunction, Request, Response } from 'express';
import { Events } from './../../enums';

/**
 * Middleware to pre and post process the request and the response objects
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {e.NextFunction} next
 */
const reqResponseMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // remove the query variables from the request url
  const baseModuleUrl = req.baseUrl.split('/').filter(item => !!item).slice(2);  // Remove falsy and baseUrl elements
  const HTTP_UNAUTHORIZED = 401;

  let authorized = false;
  let credential: Credential = new Credential('', '');
  const currentTime = new Date(req.headers.clientTimeStamp as string);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.headers.credential) {
    credential = JSON.parse(req.headers.credential as string) as Credential;
    credential.ip = req.ip;
    res.locals.credential = credential;
  }

  // #log
  Logger.getInstance().log(Events.REQUEST.toString(), req.originalUrl, credential, currentTime.toString(), JSON.stringify(req.body));

  // check if exists encrypted data to be decrypted
  if (req.headers.secure && req.headers.secure.length > 0) {
  }

  const routePath = req.route.path === '/' ? '' : req.route.path;
  const keyPath = `/${baseModuleUrl.join('/')}${routePath}`  // build the keypath
    .replace(/\/:(\w|\d)+/mg, ':'); // Replaces params by :
};

export default reqResponseMiddleware;
