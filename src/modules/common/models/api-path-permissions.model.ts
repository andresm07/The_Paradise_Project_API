/**
 * Filename: api-path-permissions.model.ts
 * Author: kduran@akurey.com
 * Date: 04/05/2019
 * Description: Stores a collection of allowed tags to call an api method
 */

import { HttpVerbs } from '../enums/';

export default class PathPermissions {

  public baseRoute: string;
  public path: string;
  public httpVerb: HttpVerbs;
  public allowedTags: string[];
  public isAuthenticated: boolean;

  constructor(pBaseRoute: string, pPath: string, pHttpVerb: HttpVerbs, pAllowTags: string[], pIsAuthenticated: boolean) {
    this.baseRoute = pBaseRoute;
    this.path = pPath;
    this.httpVerb = pHttpVerb;
    this.allowedTags = pAllowTags;
    this.isAuthenticated = pIsAuthenticated;
  }
}
