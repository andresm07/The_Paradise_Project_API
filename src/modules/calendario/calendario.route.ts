/**
 * Filename: calendario.route.ts
 * Description: Calendario Route Module
 */

import { Router } from 'express';

import { HttpVerbs } from '../common/enums';
import { RouteModule } from '../common/models';
import CalendarioController from './controllers/calendario.controller';
import Validations from './validations';

export default class Calendario extends RouteModule {

  constructor() {
    super();
  }

  /**
   * Inits the base routes to be used on router module
   */
  public initBaseRoute(): void {
    this.baseRoute = '/calendario';
  }

  /**
   * Inits the api routes to be used on the router module
   */
  public initApiRoutes(): void {
    this.addRoute('/', HttpVerbs.POST,
                  Validations.getEventosValidation,
                  CalendarioController.getCalendario);
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
