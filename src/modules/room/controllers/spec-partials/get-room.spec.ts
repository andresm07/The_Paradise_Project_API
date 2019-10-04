/**
 * Filename: get-room.spec.ts
 * Author: kduran@akurey.com
 * Date: 05/21/2019
 * Description: Spec file to test get room
 */

import chai, { expect } from 'chai';
import 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import roomHelper from './../../helper';
import RoomController from './../room.controller';

chai.use(sinonChai);

describe('Room Controller - Get Rooms', () => {

  let params;
  beforeEach(() => {
    params = {
      "token":
        {"access_token":"ya29.GlsIB46Lm6DlX8dAE_HuOQ84A_ux1qn9WSQVOlVLWexKpdGMMKGwGgqE9w2NBxKYd8JMU3-Cl4FWNtSfdB-1Zoh93u044Gvl9nY6t6YwYTejQz30Cdga5vPGlYuD",
          "refresh_token":"1/Arg12b5q86LZaDd2XV35s_hX4ZCDGHdGsmsZYRwt3uQ",
          "scope": "https://www.googleapis.com/auth/calendar",
          "token_type":"Bearer",
          "expiry_date":1557781555406},
      "credentials": {
          "client_id":"59040167325-q9om3ka450kmmk0sq2c6kpqo25r84f2v.apps.googleusercontent.com",
          "project_id":"testapigc-1555339686874",
          "auth_uri":"https://accounts.google.com/o/oauth2/auth",
          "token_uri":"https://oauth2.googleapis.com/token",
          "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
          "client_secret":"JkKUHutr7BxsoDf0qMld3HOn",
          "redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]}
    };
  });

  it('should call getRooms from helper', () => {
    const req = mockReq({ body : { params } });
    const res = mockRes();
    const next = sinon.stub();
    const RoomResult = {};
    const mockRoomHelper = sinon.stub(roomHelper);
    mockRoomHelper.getRoomsName.resolves(RoomResult);
    RoomController.getRooms(req, res, next);
    expect(mockRoomHelper.getRoomsName.called).to.equal(true);
  });

  afterEach(() => {
    sinon.restore();
  });
});
