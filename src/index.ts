/**
 * Filename: index.ts
 * Author: kduran@akurey.com
 * Date: 04/15/2019
 * Description: Index file
 */

import { Logger } from 'akore';
import bodyparser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import expressWinston from 'express-winston';
// import fs from 'fs';
import helmet from 'helmet';
import App from './app';
import RootRoute from './modules/common/root.route';
import RoomsRoute from './modules/room/room.route';

// enable detailed API logging
expressWinston.requestWhitelist.push('body');
expressWinston.responseWhitelist.push('body');

// Configure dotenv for custom process.env variables
const env = process.env.NODE_ENV || 'local';

if (env === 'local') {
  const rootDotenvPath = `${process.cwd()}/dotenv.config/`;
  const path = `${rootDotenvPath}.env.${env}`;
  Logger.getInstance().verbose(path);
  dotenv.config({ path });
}

const app = new App('Base Api');
app
  // Configs can be an array of middlewares...
  .use([
    compression(),
    cors(),
    bodyparser.json({ limit: '50mb' }),
    bodyparser.urlencoded({
      extended: true,
    }),
    helmet(),
  ])
  .mount(
    [new RootRoute()], '',
  )
  .mount(
    [new RoomsRoute()],
    '/api/',
  );

app.serve();
