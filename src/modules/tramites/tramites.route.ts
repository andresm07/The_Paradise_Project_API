/**
 * Filename: tramites.route.ts
 * Author: kristalduran@gmail.com
 * Date: 16/10/2019
 * Description: Room Route Module
 */

import { Router } from 'express';
import { HttpVerbs } from '../common/enums';
import { RouteModule } from '../common/models';
import TramitesController from './controllers/tramites.controller';
import Validations from './validations';

export default class Tramites extends RouteModule {

  constructor() {
    super();
  }

  /**
   * Inits the base routes to be used on router module
   */
  public initBaseRoute(): void {
    this.baseRoute = '/tramites';
  }

  /**
   * Inits the api routes to be used on the router module
   */
  public initApiRoutes(): void {
    this.addRoute('/tramites', HttpVerbs.POST,
                  Validations.getPatentesValidation,
                  TramitesController.getPatentes);
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
