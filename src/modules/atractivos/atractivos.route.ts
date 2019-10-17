/**
 * Filename: event.route.ts
 * Author: 
 * Date: 05/10/2019
 * Description: Room Route Module
 */

import { Router } from 'express';
import { HttpVerbs } from '../common/enums';
import { RouteModule } from '../common/models';
import AtractivosController from './controllers/atractivos.controller';
import Validations from './validations';

export default class Atractivos extends RouteModule {

  constructor() {
    super();
  }

  /**
   * Inits the base routes to be used on router module
   */
  public initBaseRoute(): void {
    this.baseRoute = '/atractivos';
  }

  /**
   * Inits the api routes to be used on the router module
   */
  public initApiRoutes(): void {
    this.addRoute('/atractivos', HttpVerbs.POST,
                  Validations.getDistritosValidation, [],
                  AtractivosController.getDistritos, false),
    this.addRoute('/atractivos', HttpVerbs.POST,
                  Validations.getLugaresValidation, [],
                  AtractivosController.getLugares, false),
    this.addRoute('/atractivos', HttpVerbs.POST,
                  Validations.getLugaresxIDValidation, [],
                  AtractivosController.getLugaresxID, false);
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
