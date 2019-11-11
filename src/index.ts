/**
 * Filename: index.ts
 * Author: kduran@akurey.com
 * Date: 04/15/2019
 * Description: Index file
 */

import bodyparser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import App from './app';
import Atractivos from './modules/Atractivos/atractivos.route';
import Calendario from './modules/Calendario/calendario.route';
import RootRoute from './modules/common/root.route';
import resena from './modules/resena/resena.route';
import Tramites from './modules/Tramites/tramites.route';

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
    [new Tramites(), new Atractivos(), new Calendario(), new resena()],
    '/',
  );

app.serve();
