/**
 * Filename: route-module.model.ts
 * Author: kduran@akurey.com
 * Date: 04/05/2019
 * Description: Route Module
 */

import express, { Router } from 'express';
import validate from 'express-validation';
import { HttpVerbs } from '../enums';
import { ISchemaValidation } from './../interfaces';

export default abstract class RouteModule {

  public baseRoute: string;
  public router: Router;

  constructor() {
    this.router = express.Router();
    this.initBaseRoute();
    this.initApiRoutes();
  }

  /**
   * Adds a new route to the routes object
   * @param routePath The route path to be used
   * @param httpVerb The route verb to identify
   * @param validation The validation schema to use on endpoint
   * @param middlewares The middlewares to appliedo to route
   * @param handler The final handler to execute on route
   */
  public addRoute(routePath: string, httpVerb: HttpVerbs, validation: ISchemaValidation,
                  handler: any): void {
    // all routes must have the reqResponseMiddleware to be run at the beggining
    // middlewares.unshift(reqResponseMiddleware);

    this.router.route(routePath)[httpVerb](
      validate(validation),
      handler,
    );
  }

  /**
   * Inits the api routes to be used on the router module
   */
  public abstract initApiRoutes(): void;

  /**
   * Inits the base route to be used on the api routes list
   */
  public abstract initBaseRoute(): void;

  /**
   * Returns the router to be mount on base router
   */
  public abstract getRouter(): Router;
}
