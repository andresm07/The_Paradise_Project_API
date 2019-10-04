/**
 * Filename: root.route.ts
 * Author: kduran@akurey.com
 * Date: 04/05/2019
 * Description: Root Route Module
 */

import { NextFunction, Request, Response, Router } from 'express';
import { HttpVerbs } from './enums';
import { RouteModule } from './models';

export default class RootRoute extends RouteModule {
  constructor() {
    super();
  }

  /**
   * Inits the base routes to be root on router module
   */
  public initBaseRoute(): void {
    this.baseRoute = '/';
  }

  /**
   * Inits the api routes to be root on the router module
   */
  public initApiRoutes(): void {
    this.addRoute('', HttpVerbs.GET, {}, [],
    (req: Request, res: Response, next: NextFunction) => {
      res.send('OK');
    // tslint:disable-next-line:align
    }, true);
  }

  /**
   * Gets the router to be mount on base api
   */
  public getRouter(): Router {
    const router = Router();
    router.use(this.baseRoute, this.router);
    return router;
  }
}
