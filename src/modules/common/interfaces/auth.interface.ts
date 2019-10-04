/**
 * Filename: auth.validation.interface.ts
 * Author: kduran@akurey.com
 * Date: 05/20/2019
 * Description: Auth Validation Interface
 */

import { google } from 'googleapis';
import { credentials } from '../../../config/constants';
import users from '../../../config/users.json';

export default class IAuth {
    public credential: object;
    public token: object;
    public client_secret: any;
    public client_id: any;
    public redirect_uris: any;
    public oAuth2Client: any;

    constructor(code: String) {
        this.credential = credentials;
        this.token = this.getToken(code);
        this.client_secret = credentials.client_secret;
        this.client_id = credentials.client_id;
        this.redirect_uris = credentials.redirect_uris;
        this.oAuth2Client = new google.auth.OAuth2(this.client_id, 
            this.client_secret, this.redirect_uris[0])
    }

    getToken(code: String): any {
      let token = {};
      if(users){
        users.forEach(user => {
          if (user.token === code) {
            token = user.providerToken;
          }
        });
        return token;
      }
    }
}