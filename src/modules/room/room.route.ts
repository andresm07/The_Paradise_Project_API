/**
 * Filename: event.route.ts
 * Author: kduran@akurey.com
 * Date: 05/10/2019
 * Description: Room Route Module
 */

import { Router } from 'express';
import { HttpVerbs } from '../common/enums';
import { RouteModule } from '../common/models';
import RoomController from './controllers/room.controller';
import Validations from './validations';

export default class Room extends RouteModule {

  constructor() {
    super();
  }

  /**
   * Inits the base routes to be used on router module
   */
  public initBaseRoute(): void {
    this.baseRoute = '/agenda';
  }

  /**
   * Inits the api routes to be used on the router module
   */
  public initApiRoutes(): void {
    this.addRoute('/eventos', HttpVerbs.POST,
                  Validations.getRoomsValidation, [],
                  RoomController.getRooms, false);
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
