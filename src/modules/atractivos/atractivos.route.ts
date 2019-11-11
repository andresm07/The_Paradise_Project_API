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
    this.baseRoute = '/atractivo';
  }

  /**
   * Inits the api routes to be used on the router module
   */
  public initApiRoutes(): void {
    this.addRoute('/distritos', HttpVerbs.POST,
                  Validations.getDistritosValidation,
                  AtractivosController.getDistritos),
    this.addRoute('/distrito', HttpVerbs.POST,
                  Validations.getLugaresValidation,
                  AtractivosController.getLugares),
    this.addRoute('/place', HttpVerbs.POST,
                  Validations.getLugaresxIDValidation,
                  AtractivosController.getLugaresxID);
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
