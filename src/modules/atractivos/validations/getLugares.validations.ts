/**
 * Filename: addEvent.validation.ts
 * Author: 
 * Date: 05/10/2019
 * Description: Get Rooms Schema Validation
 */

import Joi from 'joi';
import { ISchemaValidation } from '../../common/interfaces';

const getLugaresValidation: ISchemaValidation = {
  body: {
    token: Joi.strict().required(),
  },
};
export default getLugaresValidation;
