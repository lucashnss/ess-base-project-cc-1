<<<<<<< HEAD
import express from 'express'
const app = express();

app.use(express.json())

import filmesRoutes from './routes/filmes.routes.js'

app.use('/filmes', filmesRoutes)


app.listen(4000);
=======
const app = require('./app');
const logger = require('./logger');
const Env = require('./env');

app.listen(Env.PORT, () => {
  logger.info(`Server started on http://localhost:${Env.PORT}/api`);
});
>>>>>>> 926779ac140e4ca9fa17167edb2fa6f2c725bf40
