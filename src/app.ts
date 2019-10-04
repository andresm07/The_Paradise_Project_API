/**
 * Filename: app.ts
 * Author: kduran@akurey.com
 * Date: 04/15/2019
 * Description: Main App File
 */

import { Logger } from 'akore';
import express, { Application, Router } from 'express';
import { RouteModule } from './modules/common/models';
import {
  convertToApiException,
  notFoundException} from './modules/common/utils';

export default class App {

  private port: number = Number(process.env.PORT) || 4000;
  private router: Router;
  private app: Application;
  private configs: any = [];

  /**
   * App constructor
   * @param {string} name
   */
  constructor(name: string) {
    this.app = express();
    this.router = Router();
    this.app.set('name', name);
  }

  /**
   * Init http-listener
   * @returns {"http".Server}
   */
  public serve(): void {
    this.configure();
    this.app.listen(this.port, () => {
      Logger.getInstance().verbose(`server started on port: ${this.port}`);
    });
  }

  /**
   * Add config-middleware
   * @param config
   * @param shouldEnable
   * @returns {this}
   */
  public use(config: any, shouldEnable = true): App {
    if (!shouldEnable) {
      return this;
    }

    if (Array.isArray(config)) {
      this.configs = [...this.configs, ...config];
      return this;
    }

    this.configs.push(config);
    return this;
  }

  /**
   * Mounts the route modules to the app router
   * @param routeModules The route modules to mount on router
   */
  public mount(routeModules: RouteModule[], baseRoute: string): App {
    // const router = Router();
    routeModules.forEach((routeModule: RouteModule) => {
      Logger.getInstance().verbose(`Registered Route Module: ${baseRoute}${routeModule.baseRoute}`);
      this.router.use(baseRoute, routeModule.getRouter());
    });
    return this;
  }

  /**
   * Attach config middleware to Express
   * @returns {this}
   */
  public configure(): App {

    // Add router & some base-handlers to configs
    this.configs = [
      ...this.configs,
      this.router,
      convertToApiException,
      notFoundException,
    ];

    this.configs.forEach((config) => {
      this.app.use(config);
    });
    return this;
  }
}
