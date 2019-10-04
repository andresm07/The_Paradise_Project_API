/**
 * Filename: getRooms.spec.ts
 * Author: kduran@akurey.com
 * Date: 05/21/2019
 * Description: File to test get room
 */

import chai, { expect } from 'chai';
import 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import getRooms from './getRooms';

chai.use(sinonChai);

describe('Get Events', () => {

  let params;

  beforeEach(() => {
    params = {
      idRoom: 1,
      startDate: 1,
      endDate: 2,
      auth: {},
    };
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should call get room', () => {
    // const mockGoogleApi = sinon.stub();
    // getRooms(params.auth);
    // expect(mockGoogleApi).to.equal(true);
  });
});