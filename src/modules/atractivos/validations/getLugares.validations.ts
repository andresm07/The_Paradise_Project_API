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
    nameDistrito: Joi.strict().required(),
  },
};
export default getLugaresValidation;
