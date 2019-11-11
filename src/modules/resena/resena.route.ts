/**
 * Filename: event.route.ts
 * Author:
 * Date: 05/10/2019
 * Description: Room Route Module
 */

import { Router } from 'express';
import { HttpVerbs } from '../common/enums';
import { RouteModule } from '../common/models';
import ResenaController from './controllers/resena.controller';
import Validations from './validations';

export default class Resena extends RouteModule {

  constructor() {
    super();
  }

  /**
   * Inits the base routes to be used on router module
   */
  public initBaseRoute(): void {
    this.baseRoute = '/historia';
  }

  /**
   * Inits the api routes to be used on the router module
   */
  public initApiRoutes(): void {
    this.addRoute('/mision', HttpVerbs.POST,
                  Validations.getMisionValidation,
                  ResenaController.getMision),
    this.addRoute('/resena', HttpVerbs.POST,
                  Validations.getResenaValidation,
                  ResenaController.getResena),
    this.addRoute('/vision', HttpVerbs.POST,
                  Validations.getVisionValidation,
                  ResenaController.getVision);
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
